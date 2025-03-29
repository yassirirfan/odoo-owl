/** @odoo-module **/

import { Component, onMounted, onWillUnmount, useState, useRef } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { FilterDropdown } from "./components/filter_components";

export class DataTable extends Component {
    setup() {
        this.state = useState({
            products: [],
            loading: true,
            sortColumn: 'name',
            sortDirection: 'asc',
            filters: {
                name: '',
                default_code: '',
                list_price: { min: '', max: '' },
                qty_available: { min: '', max: '' },
                categ_id: ''
            },
            showFilters: false
        });

        this.rpc = useService("rpc");
        this.tableRef = useRef("table");

        onMounted(() => {
            this.fetchProducts();
        });
    }

    async fetchProducts() {
        this.state.loading = true;
        try {
            const products = await this.rpc("/interactive_data_table/get_products");
            this.state.products = products;
            this.state.loading = false;
            this.applyFiltersAndSort();
        } catch (error) {
            console.error("Failed to fetch products:", error);
            this.state.loading = false;
        }
    }

    sortBy(column) {
        if (this.state.sortColumn === column) {
            // Toggle direction if same column
            this.state.sortDirection = this.state.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.state.sortColumn = column;
            this.state.sortDirection = 'asc';
        }
        this.applyFiltersAndSort();
    }

    applyFiltersAndSort() {
        let filteredProducts = [...this.state.products];

        // Apply filters
        filteredProducts = filteredProducts.filter(product => {
            // Name filter (text)
            if (this.state.filters.name &&
                !product.name.toLowerCase().includes(this.state.filters.name.toLowerCase())) {
                return false;
            }

            // Default code filter (text)
            if (this.state.filters.default_code && product.default_code &&
                !product.default_code.toLowerCase().includes(this.state.filters.default_code.toLowerCase())) {
                return false;
            }

            // Price range filter
            if (this.state.filters.list_price.min !== '' &&
                product.list_price < parseFloat(this.state.filters.list_price.min)) {
                return false;
            }
            if (this.state.filters.list_price.max !== '' &&
                product.list_price > parseFloat(this.state.filters.list_price.max)) {
                return false;
            }

            // Quantity range filter
            if (this.state.filters.qty_available.min !== '' &&
                product.qty_available < parseFloat(this.state.filters.qty_available.min)) {
                return false;
            }
            if (this.state.filters.qty_available.max !== '' &&
                product.qty_available > parseFloat(this.state.filters.qty_available.max)) {
                return false;
            }

            // Category filter
            if (this.state.filters.categ_id && product.categ_id &&
                !product.categ_id.name.toLowerCase().includes(this.state.filters.categ_id.toLowerCase())) {
                return false;
            }

            return true;
        });

        // Sort products
        const column = this.state.sortColumn;
        const direction = this.state.sortDirection;

        filteredProducts.sort((a, b) => {
            let valueA, valueB;

            // Handle nested properties
            if (column === 'categ_id') {
                valueA = (a.categ_id && a.categ_id.name) || '';
                valueB = (b.categ_id && b.categ_id.name) || '';
            } else {
                valueA = a[column];
                valueB = b[column];
            }

            // Handle string comparisons case-insensitive
            if (typeof valueA === 'string' && typeof valueB === 'string') {
                valueA = valueA.toLowerCase();
                valueB = valueB.toLowerCase();
            }

            if (valueA < valueB) return direction === 'asc' ? -1 : 1;
            if (valueA > valueB) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        this.state.filteredProducts = filteredProducts;
    }

    updateTextFilter(field, value) {
        this.state.filters[field] = value;
        this.applyFiltersAndSort();
    }

    updateRangeFilter(field, type, value) {
        this.state.filters[field][type] = value;
        this.applyFiltersAndSort();
    }

    toggleFilters() {
        this.state.showFilters = !this.state.showFilters;
    }

    resetFilters() {
        this.state.filters = {
            name: '',
            default_code: '',
            list_price: { min: '', max: '' },
            qty_available: { min: '', max: '' },
            categ_id: ''
        };
        this.applyFiltersAndSort();
    }

    getSortIcon(column) {
        if (this.state.sortColumn !== column) return 'fa-sort';
        return this.state.sortDirection === 'asc' ? 'fa-sort-up' : 'fa-sort-down';
    }
}

DataTable.template = 'interactive_data_table.DataTable';
DataTable.components = { FilterDropdown };

registry.category("actions").add("interactive_data_table.action", DataTable);