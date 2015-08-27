'use strict';

describe('Directive: timePanel', function () {

  // load the directive's module
  beforeEach(module('timeConverterApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<time-panel></time-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the timePanel directive');
  }));
});
