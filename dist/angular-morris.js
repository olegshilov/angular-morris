(function() {
  angular.module('angular-morris', []);

}).call(this);

(function() {
  var morrisArea;

  morrisArea = (function() {
    function morrisArea() {}

    morrisArea.prototype.restrict = 'EA';

    morrisArea.prototype.scope = {
      data: '=morrisAreaData',
      xkey: '=morrisAreaXkey',
      ykeys: '=morrisAreaYkeys',
      labels: '=morrisAreaLabels',
      colors: '=morrisAreaColors'
    };

    morrisArea.prototype.link = function(scope, element) {
      var colors;
      if (scope.colors === void 0 || scope.colors === '') {
        colors = null;
      } else {
        colors = scope.colors;
      }
      return scope.$watch('morrisAreaData', function() {
        if (scope.data) {
          if (!scope.morrisAreaInstance) {
            return scope.morrisAreaInstance = new Morris.Area({
              element: element,
              data: scope.data,
              xkey: scope.xkey,
              ykeys: scope.ykeys,
              labels: scope.labels,
              lineColors: colors || ['#0b62a4', '#7a92a3', '#4da74d']
            });
          } else {
            return scope.morrisAreaInstance.setData(scope.data);
          }
        }
      });
    };

    return morrisArea;

  })();

  angular.module('angular-morris').directive('morrisArea', function() {
    return new morrisArea;
  });

}).call(this);

(function() {
  var morrisBar;

  morrisBar = (function() {
    function morrisBar() {}

    morrisBar.prototype.restrict = 'EA';

    morrisBar.prototype.scope = {
      data: '=morrisBarData',
      barx: '=morrisBarX',
      bary: '=morrisBarY',
      labels: '=morrisBarLabels',
      colors: '=morrisBarColors'
    };

    morrisBar.prototype.link = function(scope, element) {
      var colors;
      if (scope.colors === void 0 || scope.colors === '') {
        colors = null;
      } else {
        colors = scope.colors;
      }
      return scope.$watch('morrisBarData', function() {
        if (scope.data) {
          if (!scope.morrisBarInstance) {
            return scope.morrisBarInstance = new Morris.Bar({
              element: element,
              data: scope.data,
              xkey: scope.barx,
              ykeys: scope.bary,
              labels: scope.labels,
              barColors: colors || ['#0b62a4', '#7a92a3', '#4da74d'],
              xLabelMargin: 2
            });
          } else {
            return scope.morrisBarInstance.setData(scope.data);
          }
        }
      });
    };

    return morrisBar;

  })();

  angular.module('angular-morris').directive('morrisBar', function() {
    return new morrisBar;
  });

}).call(this);

(function() {
  var morrisDonut;

  morrisDonut = (function() {
    function morrisDonut() {}

    morrisDonut.prototype.restrict = 'A';

    morrisDonut.prototype.scope = {
      data: '=morrisDonutData',
      colors: '=morrisDonutColors'
    };

    morrisDonut.prototype.link = function(scope, element) {
      var colors;
      if (scope.colors === void 0 || scope.colors === '') {
        colors = null;
      } else {
        colors = scope.colors;
      }
      return scope.$watch('morrisDonutData', function() {
        if (scope.data) {
          if (!scope.morrisDonutInstance) {
            return scope.morrisDonutInstance = new Morris.Donut({
              element: element,
              data: scope.data,
              colors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed']
            });
          } else {
            return scope.morrisDonutInstance.setData(scope.data);
          }
        }
      });
    };

    return morrisDonut;

  })();

  angular.module('angular-morris').directive('morrisDonut', function() {
    return new morrisDonut;
  });

}).call(this);

(function() {
  var morrisLine;

  morrisLine = (function() {
    function morrisLine() {}

    morrisLine.prototype.restrict = 'EA';

    morrisLine.prototype.scope = {
      data: '=morrisLineData',
      xkey: '=morrisLineXkey',
      ykeys: '=morrisLineYkeys',
      labels: '=morrisLineLabels',
      colors: '=morrisLineColors'
    };

    morrisLine.prototype.link = function(scope, element) {
      var colors;
      if (scope.colors === void 0 || scope.colors === '') {
        colors = null;
      } else {
        colors = scope.colors;
      }
      return scope.$watch('morrisLineData', function() {
        if (scope.data) {
          if (!scope.morrisLineInstance) {
            return scope.morrisLineInstance = new Morris.Line({
              element: element,
              data: scope.data,
              xkey: scope.xkey,
              ykeys: scope.ykeys,
              labels: scope.labels,
              lineColors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed']
            });
          } else {
            return scope.morrisLineInstance.setData(scope.data);
          }
        }
      });
    };

    return morrisLine;

  })();

  angular.module('angular-morris').directive('morrisLine', function() {
    return new morrisLine;
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vcnJpc0FuZ3VsYXJNb2R1bGUuY29mZmVlIiwibW9ycmlzQXJlYURpcmVjdGl2ZS5jb2ZmZWUiLCJtb3JyaXNCYXJEaXJlY3RpdmUuY29mZmVlIiwibW9ycmlzRG9udXREaXJlY3RpdmUuY29mZmVlIiwibW9ycmlzTGluZURpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxFQUFBLE9BQ0UsQ0FBQyxNQURILENBQ1UsZ0JBRFYsRUFDNEIsRUFENUIsQ0FBQSxDQUFBO0FBQUE7OztBQ0FBO0FBQUEsTUFBQSxVQUFBOztBQUFBLEVBQU07QUFDUyxJQUFBLG9CQUFBLEdBQUEsQ0FBYjs7QUFBQSx5QkFDQSxRQUFBLEdBQVUsSUFEVixDQUFBOztBQUFBLHlCQUVBLEtBQUEsR0FDRTtBQUFBLE1BQUEsSUFBQSxFQUFNLGlCQUFOO0FBQUEsTUFDQSxJQUFBLEVBQU0saUJBRE47QUFBQSxNQUVBLEtBQUEsRUFBTyxrQkFGUDtBQUFBLE1BR0EsTUFBQSxFQUFRLG1CQUhSO0FBQUEsTUFJQSxNQUFBLEVBQVEsbUJBSlI7S0FIRixDQUFBOztBQUFBLHlCQVFBLElBQUEsR0FBTSxTQUFDLEtBQUQsRUFBUSxPQUFSLEdBQUE7QUFDSixVQUFBLE1BQUE7QUFBQSxNQUFBLElBQUcsS0FBSyxDQUFDLE1BQU4sS0FBZ0IsTUFBaEIsSUFBNkIsS0FBSyxDQUFDLE1BQU4sS0FBZ0IsRUFBaEQ7QUFDRSxRQUFBLE1BQUEsR0FBUyxJQUFULENBREY7T0FBQSxNQUFBO0FBR0UsUUFBQSxNQUFBLEdBQVMsS0FBSyxDQUFDLE1BQWYsQ0FIRjtPQUFBO2FBSUEsS0FBSyxDQUFDLE1BQU4sQ0FBYSxnQkFBYixFQUErQixTQUFBLEdBQUE7QUFDN0IsUUFBQSxJQUFHLEtBQUssQ0FBQyxJQUFUO0FBQ0UsVUFBQSxJQUFHLENBQUEsS0FBTSxDQUFDLGtCQUFWO21CQUNFLEtBQUssQ0FBQyxrQkFBTixHQUErQixJQUFBLE1BQU0sQ0FBQyxJQUFQLENB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LENBTnRCO2FBRDZCLEVBRGpDO1dBQUEsTUFBQTttQkFVRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBekIsQ0FBaUMsS0FBSyxDQUFDLElBQXZDLEVBVkY7V0FERjtTQUQ2QjtNQUFBLENBQS9CLEVBTEk7SUFBQSxDQVJOLENBQUE7O3NCQUFBOztNQURGLENBQUE7O0FBQUEsRUE0QkEsT0FDRSxDQUFDLE1BREgsQ0FDVSxnQkFEVixDQUVFLENBQUMsU0FGSCxDQUVhLFlBRmIsRUFFMkIsU0FBQSxHQUFBO1dBQUcsR0FBQSxDQUFBLFdBQUg7RUFBQSxDQUYzQixDQTVCQSxDQUFBO0FBQUEiLCJmaWxlIjoiYW5ndWxhci1tb3JyaXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gIC5tb2R1bGUgJ2FuZ3VsYXItbW9ycmlzJywgW11cbiIsImNsYXNzIG1vcnJpc0FyZWFcbiAgY29uc3RydWN0b3I6ICgpIC0+XG4gIHJlc3RyaWN0OiAnRUEnXG4gIHNjb3BlOlxuICAgIGRhdGE6ICc9bW9ycmlzQXJlYURhdGEnXG4gICAgeGtleTogJz1tb3JyaXNBcmVhWGtleSdcbiAgICB5a2V5czogJz1tb3JyaXNBcmVhWWtleXMnXG4gICAgbGFiZWxzOiAnPW1vcnJpc0FyZWFMYWJlbHMnXG4gICAgY29sb3JzOiAnPW1vcnJpc0FyZWFDb2xvcnMnXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCkgLT5cbiAgICBpZiBzY29wZS5jb2xvcnMgPT0gdW5kZWZpbmVkIHx8IHNjb3BlLmNvbG9ycyA9PSAnJ1xuICAgICAgY29sb3JzID0gbnVsbFxuICAgIGVsc2VcbiAgICAgIGNvbG9ycyA9IHNjb3BlLmNvbG9yc1xuICAgIHNjb3BlLiR3YXRjaCAnbW9ycmlzQXJlYURhdGEnLCAtPlxuICAgICAgaWYgc2NvcGUuZGF0YVxuICAgICAgICBpZiAhc2NvcGUubW9ycmlzQXJlYUluc3RhbmNlXG4gICAgICAgICAgc2NvcGUubW9ycmlzQXJlYUluc3RhbmNlID0gbmV3IE1vcnJpcy5BcmVhXG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50XG4gICAgICAgICAgICBkYXRhOiBzY29wZS5kYXRhXG4gICAgICAgICAgICB4a2V5OiBzY29wZS54a2V5XG4gICAgICAgICAgICB5a2V5czogc2NvcGUueWtleXNcbiAgICAgICAgICAgIGxhYmVsczogc2NvcGUubGFiZWxzXG4gICAgICAgICAgICBsaW5lQ29sb3JzOiBjb2xvcnMgfHwgWycjMGI2MmE0JywgJyM3YTkyYTMnLCAnIzRkYTc0ZCddXG4jICAgICAgICAgICAgcmVzaXplOiB0cnVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBzY29wZS5tb3JyaXNBcmVhSW5zdGFuY2Uuc2V0RGF0YSBzY29wZS5kYXRhXG5cbmFuZ3VsYXJcbiAgLm1vZHVsZSAnYW5ndWxhci1tb3JyaXMnXG4gIC5kaXJlY3RpdmUgJ21vcnJpc0FyZWEnLCAtPiBuZXcgbW9ycmlzQXJlYVxuIiwiY2xhc3MgbW9ycmlzQmFyXG4gIGNvbnN0cnVjdG9yOiAoKSAtPlxuICByZXN0cmljdDogJ0VBJ1xuICBzY29wZTpcbiAgICBkYXRhOiAnPW1vcnJpc0JhckRhdGEnXG4gICAgYmFyeDogJz1tb3JyaXNCYXJYJ1xuICAgIGJhcnk6ICc9bW9ycmlzQmFyWSdcbiAgICBsYWJlbHM6ICc9bW9ycmlzQmFyTGFiZWxzJ1xuICAgIGNvbG9yczogJz1tb3JyaXNCYXJDb2xvcnMnXG4gIGxpbms6IChzY29wZSwgZWxlbWVudCkgLT5cbiAgICBpZiBzY29wZS5jb2xvcnMgPT0gdW5kZWZpbmVkIHx8IHNjb3BlLmNvbG9ycyA9PSAnJ1xuICAgICAgY29sb3JzID0gbnVsbFxuICAgIGVsc2VcbiAgICAgIGNvbG9ycyA9IHNjb3BlLmNvbG9yc1xuICAgIHNjb3BlLiR3YXRjaCAnbW9ycmlzQmFyRGF0YScsIC0+XG4gICAgICBpZiBzY29wZS5kYXRhXG4gICAgICAgIGlmICFzY29wZS5tb3JyaXNCYXJJbnN0YW5jZVxuICAgICAgICAgIHNjb3BlLm1vcnJpc0Jhckluc3RhbmNlID0gbmV3IE1vcnJpcy5CYXJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgICAgICAgICAgIGRhdGE6IHNjb3BlLmRhdGFcbiAgICAgICAgICAgIHhrZXk6IHNjb3BlLmJhcnhcbiAgICAgICAgICAgIHlrZXlzOiBzY29wZS5iYXJ5XG4gICAgICAgICAgICBsYWJlbHM6IHNjb3BlLmxhYmVsc1xuICAgICAgICAgICAgYmFyQ29sb3JzOiBjb2xvcnMgfHwgWycjMGI2MmE0JywgJyM3YTkyYTMnLCAnIzRkYTc0ZCddXG4gICAgICAgICAgICB4TGFiZWxNYXJnaW46IDJcbiMgICAgICAgICAgICByZXNpemU6IHRydWVcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHNjb3BlLm1vcnJpc0Jhckluc3RhbmNlLnNldERhdGEgc2NvcGUuZGF0YVxuXG5hbmd1bGFyXG4gIC5tb2R1bGUgJ2FuZ3VsYXItbW9ycmlzJ1xuICAuZGlyZWN0aXZlICdtb3JyaXNCYXInLCAtPiBuZXcgbW9ycmlzQmFyXG4iLCJjbGFzcyBtb3JyaXNEb251dFxuICBjb25zdHJ1Y3RvcjogKCkgLT5cbiAgcmVzdHJpY3Q6ICdBJyxcbiAgc2NvcGU6XG4gICAgZGF0YTogJz1tb3JyaXNEb251dERhdGEnXG4gICAgY29sb3JzOiAnPW1vcnJpc0RvbnV0Q29sb3JzJ1xuICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQpIC0+XG4gICAgaWYgc2NvcGUuY29sb3JzID09IHVuZGVmaW5lZCB8fCBzY29wZS5jb2xvcnMgPT0gJydcbiAgICAgIGNvbG9ycyA9IG51bGxcbiAgICBlbHNlXG4gICAgICBjb2xvcnMgPSBzY29wZS5jb2xvcnNcbiAgICBzY29wZS4kd2F0Y2ggJ21vcnJpc0RvbnV0RGF0YScsIC0+XG4gICAgICBpZiBzY29wZS5kYXRhXG4gICAgICAgIGlmICFzY29wZS5tb3JyaXNEb251dEluc3RhbmNlXG4gICAgICAgICAgc2NvcGUubW9ycmlzRG9udXRJbnN0YW5jZSA9IG5ldyBNb3JyaXMuRG9udXRcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgICAgICAgICAgIGRhdGE6IHNjb3BlLmRhdGFcbiAgICAgICAgICAgIGNvbG9yczogY29sb3JzIHx8IFsnIzBiNjJhNCcsICcjN2E5MmEzJywgJyM0ZGE3NGQnLCAnI2FmZDhmOCcsICcjZWRjMjQwJywgJyNjYjRiNGInLCAnIzk0NDBlZCddXG4jICAgICAgICAgICAgcmVzaXplOiB0cnVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBzY29wZS5tb3JyaXNEb251dEluc3RhbmNlLnNldERhdGEgc2NvcGUuZGF0YVxuXG5hbmd1bGFyXG4gIC5tb2R1bGUgJ2FuZ3VsYXItbW9ycmlzJ1xuICAuZGlyZWN0aXZlICdtb3JyaXNEb251dCcsIC0+IG5ldyBtb3JyaXNEb251dFxuIiwiY2xhc3MgbW9ycmlzTGluZVxuICBjb25zdHJ1Y3RvcjogKCkgLT5cbiAgcmVzdHJpY3Q6ICdFQSdcbiAgc2NvcGU6XG4gICAgZGF0YTogJz1tb3JyaXNMaW5lRGF0YSdcbiAgICB4a2V5OiAnPW1vcnJpc0xpbmVYa2V5J1xuICAgIHlrZXlzOiAnPW1vcnJpc0xpbmVZa2V5cydcbiAgICBsYWJlbHM6ICc9bW9ycmlzTGluZUxhYmVscydcbiAgICBjb2xvcnM6ICc9bW9ycmlzTGluZUNvbG9ycydcbiAgbGluazogKHNjb3BlLCBlbGVtZW50KSAtPlxuICAgIGlmIHNjb3BlLmNvbG9ycyA9PSB1bmRlZmluZWQgfHwgc2NvcGUuY29sb3JzID09ICcnXG4gICAgICBjb2xvcnMgPSBudWxsXG4gICAgZWxzZVxuICAgICAgY29sb3JzID0gc2NvcGUuY29sb3JzXG4gICAgc2NvcGUuJHdhdGNoICdtb3JyaXNMaW5lRGF0YScsIC0+XG4gICAgICBpZiBzY29wZS5kYXRhXG4gICAgICAgIGlmICFzY29wZS5tb3JyaXNMaW5lSW5zdGFuY2VcbiAgICAgICAgICBzY29wZS5tb3JyaXNMaW5lSW5zdGFuY2UgPSBuZXcgTW9ycmlzLkxpbmVcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgICAgICAgICAgIGRhdGE6IHNjb3BlLmRhdGFcbiAgICAgICAgICAgIHhrZXk6IHNjb3BlLnhrZXlcbiAgICAgICAgICAgIHlrZXlzOiBzY29wZS55a2V5c1xuICAgICAgICAgICAgbGFiZWxzOiBzY29wZS5sYWJlbHNcbiMgICAgICAgICAgICByZXNpemU6IHRydWVcbiAgICAgICAgICAgIGxpbmVDb2xvcnM6IGNvbG9ycyB8fCBbJyMwYjYyYTQnLCAnIzdhOTJhMycsICcjNGRhNzRkJywgJyNhZmQ4ZjgnLCAnI2VkYzI0MCcsICcjY2I0YjRiJywgJyM5NDQwZWQnXVxuICAgICAgICBlbHNlXG4gICAgICAgICAgc2NvcGUubW9ycmlzTGluZUluc3RhbmNlLnNldERhdGEgc2NvcGUuZGF0YVxuXG5hbmd1bGFyXG4gIC5tb2R1bGUgJ2FuZ3VsYXItbW9ycmlzJ1xuICAuZGlyZWN0aXZlICdtb3JyaXNMaW5lJywgLT4gbmV3IG1vcnJpc0xpbmVcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==