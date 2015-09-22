(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery'], function($) {
    var PieChart;
    return PieChart = (function() {

      PieChart.UPDATE_THRESHOLD = 0.000001;

      PieChart.prototype._percentage = 0;

      PieChart.prototype._text = 0;

      PieChart.prototype._stroke = 3;

      PieChart.prototype._canvas = null;

      PieChart.prototype._innerFill = '#fff';

      PieChart.prototype._innerFillHover = '#b4b4b4';

      PieChart.prototype._outerFill = '#c5c5c5';

      PieChart.prototype._outerFillHover = '#fafafa';

      PieChart.prototype._percentFill = '#ea5709';

      PieChart.prototype._textFill = '#2b2b2b';

      PieChart.prototype._textFillHover = '#222';

      PieChart.prototype._fontSize = '28px';

      PieChart.prototype._fontFamily = '"HelveticaNeue-Light", "Helvetica Neue Light",\
                  "Helvetica Neue", "Arial Narrow", Helvetica, san-serif';

      PieChart.prototype._fontStyle = '';

      PieChart.prototype._animationDuration = 600;

      PieChart.prototype._hover = false;

      PieChart.prototype._selected = false;

      function PieChart(args) {
        var $parent,
          _this = this;
        if (args == null) {
          args = {};
        }
        this._fillStyle = __bind(this._fillStyle, this);

        this._drawText = __bind(this._drawText, this);

        this._fillOuterCircle = __bind(this._fillOuterCircle, this);

        this._fillCenterCircle = __bind(this._fillCenterCircle, this);

        this._fillBorderArc = __bind(this._fillBorderArc, this);

        this.update = __bind(this.update, this);

        this.getInnerFill = __bind(this.getInnerFill, this);

        this.setInnerFill = __bind(this.setInnerFill, this);

        this.setSelected = __bind(this.setSelected, this);

        this.setText = __bind(this.setText, this);

        this._setPercentage = __bind(this._setPercentage, this);

        this.setPercentage = __bind(this.setPercentage, this);

        _.each(args, function(v, k) {
          return _this['_' + k] = v;
        });
        $parent = $(this._canvas).parents('.generic-stat-wrapper').first();
        if ($parent.attr('clickable') === 'true') {
          $parent.mouseenter(function() {
            _this._hover = true;
            return _this.update();
          });
          $parent.mouseleave(function() {
            _this._hover = false;
            return _this.update();
          });
        }
      }

      PieChart.prototype.setPercentage = function(percentage, opts) {
        if (opts == null) {
          opts = {};
        }
        return this._setPercentage(opts, percentage);
      };

      PieChart.prototype._setPercentage = function(_arg, percentage) {
        var shouldAnimate, shouldUpdate,
          _this = this;
        shouldUpdate = _arg.shouldUpdate, shouldAnimate = _arg.shouldAnimate;
        percentage || (percentage = 0);
        if (shouldUpdate == null) {
          shouldUpdate = true;
        }
        if (shouldAnimate == null) {
          shouldAnimate = true;
        }
        if (Math.abs(percentage - this._percentage) < PieChart.UPDATE_THRESHOLD) {
          return;
        }
        if (shouldAnimate) {
          return $({
            percentage: this._percentage
          }).animate({
            percentage: percentage
          }, {
            duration: this._animationDuration,
            easing: 'easeInExpo',
            step: function(val) {
              return _this.setPercentage(val, {
                shouldAnimate: false
              });
            }
          });
        } else {
          this._percentage = percentage;
          if (shouldUpdate) {
            return this.update();
          }
        }
      };

      PieChart.prototype.setText = function(_text, _arg) {
        var shouldUpdate;
        this._text = _text;
        shouldUpdate = _arg.shouldUpdate;
        this._text || (this._text = '');
        if (shouldUpdate == null) {
          shouldUpdate = true;
        }
        if (shouldUpdate) {
          return this.update();
        }
      };

      PieChart.prototype.setSelected = function(_selected, _arg) {
        var shouldUpdate;
        this._selected = _selected;
        shouldUpdate = _arg.shouldUpdate;
        if (shouldUpdate == null) {
          shouldUpdate = true;
        }
        if (shouldUpdate) {
          return this.update();
        }
      };

      PieChart.prototype.setInnerFill = function(_innerFill, _arg) {
        var shouldUpdate;
        this._innerFill = _innerFill;
        shouldUpdate = _arg.shouldUpdate;
        if (shouldUpdate == null) {
          shouldUpdate = true;
        }
        if (shouldUpdate) {
          return this.update();
        }
      };

      PieChart.prototype.getInnerFill = function() {
        return this._innerFill;
      };

      PieChart.prototype.update = function() {
        var context, size;
        context = this._canvas.getContext('2d');
        this.setSelected($(this._canvas).hasClass('selected'), {
          shouldUpdate: false
        });
        size = parseInt(this._canvas.width);
        context.clearRect(0, 0, size, size);
        this._fillOuterCircle(context, size);
        this._fillBorderArc(context, size);
        this._fillCenterCircle(context, size);
        return this._drawText(context, size);
      };

      PieChart.prototype._fillBorderArc = function(context, size) {
        var halfSize;
        context.save();
        halfSize = size / 2;
        context.beginPath();
        context.moveTo(size / 2, size / 2);
        context.arc(halfSize, halfSize, halfSize, -Math.PI / 2, Math.PI * (this._percentage / 100 * 2) - Math.PI / 2, false);
        context.closePath();
        context.fillStyle = this._fillStyle('percentFill');
        context.fill();
        return context.restore();
      };

      PieChart.prototype._fillCenterCircle = function(context, size) {
        var circleSize, halfCircleSize;
        context.save();
        circleSize = size - this._stroke * 2;
        halfCircleSize = circleSize / 2;
        context.beginPath();
        context.arc(size / 2, size / 2, halfCircleSize, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = this._fillStyle('innerFill');
        context.fill();
        return context.restore();
      };

      PieChart.prototype._fillOuterCircle = function(context, size) {
        var halfSize, inversePercentage;
        context.save();
        halfSize = size / 2;
        inversePercentage = 100 - this._percentage;
        context.beginPath();
        context.moveTo(size / 2, size / 2);
        context.arc(halfSize, halfSize, halfSize, -Math.PI * (inversePercentage / 100 * 2) - Math.PI / 2, -Math.PI / 2, false);
        context.closePath();
        context.fillStyle = this._fillStyle('outerFill');
        context.fill();
        return context.restore();
      };

      PieChart.prototype._drawText = function(context, size) {
        context.save();
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = "" + this._fontStyle + " " + this._fontSize + " " + this._fontFamily;
        context.fillStyle = this._fillStyle('textFill');
        context.shadowOffsetY = 1;
        context.shadowColor = 'rgba(255,255,255,.2)';
        context.shadowBlur = 3;
        context.fillText(this._text, size / 2, size / 2);
        return context.restore();
      };

      PieChart.prototype._fillStyle = function(attr) {
        if (this._hover) {
          return this['_' + attr + 'Hover'] || this['_' + attr];
        } else if (this._selected) {
          return this['_' + attr + 'Selected'] || this['_' + attr];
        } else {
          return this['_' + attr];
        }
      };

      return PieChart;

    })();
  });

}).call(this);
