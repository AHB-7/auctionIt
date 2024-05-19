import {
    filterContainer,
    filterEl,
    sortContainer,
    sortEl,
} from '../global/variables.mjs'

/**
 * Toggles the visibility of the filter and sort containers based on the state of the respective checkboxes.
 * Hides the filter and sort containers when clicking outside of them.
 */
export function filterContainerToggler() {
    /**
     * Toggles the visibility of the filter container based on the filter checkbox state.
     */
    function toggleFilter() {
        if (filterEl.checked) {
            filterContainer.classList.remove('d-none')
        } else {
            filterContainer.classList.add('d-none')
        }
    }

    /**
     * Toggles the visibility of the sort container based on the sort checkbox state.
     */
    function toggleSort() {
        if (sortEl.checked) {
            sortContainer.classList.remove('d-none')
        } else {
            sortContainer.classList.add('d-none')
        }
    }

    // Add event listeners to toggle visibility when checkboxes are clicked
    filterEl.addEventListener('click', toggleFilter)
    sortEl.addEventListener('click', toggleSort)

    // Add event listener to hide containers when clicking outside of them
    document.addEventListener(
        'click',
        function (event) {
            if (
                !filterContainer.contains(event.target) &&
                !filterEl.contains(event.target)
            ) {
                filterEl.checked = false
                toggleFilter()
            }
            if (
                !sortContainer.contains(event.target) &&
                !sortEl.contains(event.target)
            ) {
                sortEl.checked = false
                toggleSort()
            }
        },
        true
    )
}
