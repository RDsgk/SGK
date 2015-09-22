(function() {
  var m, re;

  window.jQueryInWindow = function(func) {
    return func.call(window, jQuery);
  };

  if (top.location !== self.location) {
    top.location = self.location.href;
  }

  re = /\/(\w+)\/(\d+)/g;

  while (m = re.exec(window.location.href)) {
    window[m[1].toUpperCase().replace(/s$/i, '') + '_ID'] = parseInt(m[2]);
  }

  jQuery(function($) {
    var _base;
    window.WORKSPACE_ID || (window.WORKSPACE_ID = $('meta[name=workspace_id]').attr('content'));
    $.fn.addDisableOverlay = function(supportedProducts) {
      var $disabledOverlay, $mainContent;
      $disabledOverlay = $('.body-disabled-overlay');
      $mainContent = $('.mainContent');
      if ($disabledOverlay.height() < $mainContent.height()) {
        $disabledOverlay.css({
          height: $mainContent.height() - 20
        });
      }
      $disabledOverlay.find('span.products').html("<a href='" + ($('span.registration-url').html()) + "'>register for the free " + supportedProducts + " trial</a>");
      return $disabledOverlay.removeClass('invisible');
    };
    $.fn.toggleVisibility = function($elem) {
      return $(this).live('click', function(e) {
        if ($(this).prop('checked')) {
          return $elem.show();
        } else {
          return $elem.hide();
        }
      });
    };
    $.fn.checkAll = function($elem) {
      var $checkboxes, setAllCheckboxState,
        _this = this;
      $checkboxes = $elem.find('input[type=checkbox]');
      setAllCheckboxState = function() {
        var $uncheckedCheckboxes;
        $uncheckedCheckboxes = $elem.find('input[type=checkbox]:not(:checked)');
        if ($uncheckedCheckboxes.length > 0) {
          return $(_this).prop('checked', false);
        } else {
          return $(_this).prop('checked', true);
        }
      };
      setAllCheckboxState();
      $(this).live('click', function(e) {
        if ($(this).prop('checked')) {
          return $checkboxes.prop('checked', true);
        } else {
          return $checkboxes.prop('checked', false);
        }
      });
      return $checkboxes.live('click', function(e) {
        return setAllCheckboxState();
      });
    };
    (_base = $.expr[':']).focus || (_base.focus = function(elem) {
      return elem === document.activeElement && (elem.type || elem.href);
    });
    $.extend($.ui.tooltip.prototype.options, {
      position: {
        using: function(position, feedback) {
          var left, right, winWidth;
          left = feedback.target.left;
          right = 'auto';
          winWidth = $(window).width();
          if (left > winWidth - 200) {
            right = winWidth - (left + feedback.target.width);
            left = 'auto';
          }
          return $(this).css({
            position: 'absolute',
            left: left,
            right: right,
            top: feedback.target.top + feedback.target.height + 5,
            'z-index': 2
          });
        }
      }
    });
    $(document).on('updateBadges', function(e, resp) {
      var $badge, $lis, $nav, findOrCreateBadge;
      $nav = $('#workspace_nav ul.nav_tabs');
      $lis = $nav.children('li');
      if ($lis.length === 0) {
        return;
      }
      findOrCreateBadge = function($li) {
        var $badge;
        $badge = $li.find('>a>.badge').first();
        if ($badge.length > 0) {
          return $badge;
        } else {
          return $('<span />', {
            "class": 'badge'
          }).appendTo($li.find('>a'));
        }
      };
      $badge = findOrCreateBadge($lis.filter('li.sessions'));
      if (resp.session_count === 0) {
        $badge.remove();
      } else {
        $badge.text(resp.session_count);
      }
      $badge = findOrCreateBadge($lis.filter('li.reports'));
      if (resp.report_count === 0) {
        $badge.remove();
      } else {
        $badge.text(resp.report_count);
      }
      $badge = findOrCreateBadge($lis.filter('li.tasks'));
      if (resp.task_count === 0) {
        $badge.remove();
      } else {
        $badge.text(resp.task_count);
      }
      $badge = findOrCreateBadge($lis.filter('li.campaigns'));
      if (resp.campaign_count === 0) {
        return $badge.remove();
      } else {
        return $badge.text(resp.campaign_count);
      }
    });
    return $(document).ready(function() {
      var $topMenu;
      _.mixin(_.str.exports());
      $topMenu = $('#top-menu>ul.drop-menu>li.menu>a').each(function() {
        return $(this).click(function(e) {
          return e.preventDefault();
        });
      });
      return $topMenu = $('#top-menu li.menu ul.sub-menu').each(function(index, elem) {
        var parent_width;
        parent_width = $(elem).parent().outerWidth();
        if ($(elem).width() < parent_width) {
          return $(elem).width(parent_width - 2);
        }
      });
    });
  });

}).call(this);
