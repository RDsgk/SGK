(function() {

  jQuery(function($) {
    return $(document).ready(function() {
      return $("#task-chains").table({
        searchable: true,
        controlBarLocation: $('.analysis-control-bar'),
        searchInputHint: 'Search Task Chains',
        datatableOptions: {
          "oLanguage": {
            "sEmptyTable": "No Task Chains are associated with this Project. Click 'Create Chain' above to create a new one."
          },
          "aaSorting": [[0, 'asc']],
          "aoColumns": [
            {
              "bSortable": false
            }, {}, {}, {}, {}, {}, {}, {}, {}
          ]
        }
      });
    });
  });

}).call(this);
