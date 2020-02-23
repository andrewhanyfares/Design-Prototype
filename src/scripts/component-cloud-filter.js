(function ($) {
    $('.filter-list-title').click(function () {
        $(this).parent().toggleClass("show");
    })
    var filterSeclectAll = $(".filter-select-all");
    filterSeclectAll.change(function () {
        var categoriesCheckbox = $(this).closest('dl').find('input:checkbox').not('.filter-select-all');
        if (this.checked) {
            categoriesCheckbox.each(function () {
                this.checked = true;
            })
        } else {
            categoriesCheckbox.each(function () {
                this.checked = false;
            })
        }
    });
    var categoryCheckbox = $(".filters-list input:checkbox").not('.filter-select-all')
    categoryCheckbox.change(function () {
        var categoriesCheckbox = $(this).closest('dl').find('input:checkbox').not('.filter-select-all');
        var filterSelectAll = $(this).closest('dl').find('.filter-select-all');
        if (this.checked) {
            var isAllChecked = true;
            categoriesCheckbox.not('.filter-select-all').each(function () {
                if (!this.checked) {
                    isAllChecked = false;
                }
            })
            if (isAllChecked == true) { 
                filterSelectAll.prop("checked", true);
            }
        } else {
            filterSelectAll.prop("checked", false);
        }
    });
    $('.filter-clear').click(function () {
        $(".filter-body input[type='checkbox']").prop("checked", false);

    })
})(jQuery, document);