const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
)
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
)
// Filter
const filterEl = document.querySelector('#filter')
const sortEl = document.querySelector('#sort')
const filterContainer = document.querySelector('.filter-container')
const sortContainer = document.querySelector('.sort-container')

function toggleFilter() {
    if (filterEl.checked) {
        filterContainer.classList.remove('d-none')
    } else {
        filterContainer.classList.add('d-none')
    }
}

function toggleSort() {
    if (sortEl.checked) {
        sortContainer.classList.remove('d-none')
    } else {
        sortContainer.classList.add('d-none')
    }
}

filterEl.addEventListener('click', toggleFilter)
sortEl.addEventListener('click', toggleSort)

// Hide filter or sort container when clicking outside
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
) // Use capture phase to ensure this runs before other click events
