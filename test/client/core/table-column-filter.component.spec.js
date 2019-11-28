require('../../../public/js/core/core.module.js');
require('../../../public/js/core/table-column-filter.component.js');

describe('appTableColumnFilter', function () {
    beforeEach(angular.mock.module('app.core'));
    beforeEach(angular.mock.module('app.templates'));

    let $compile, $rootScope, $timeout;

    beforeEach(inject(function (_$compile_, _$rootScope_, _$timeout_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $timeout = _$timeout_;
    }));

    describe('component', function () {
        it('should call onFilter on keydown event', function () {
            const html = '<app-table-column-filter on-filter="filter($value)"></app-table-column-filter>';
            $rootScope.filter = jest.fn();
            const element = $compile(html)($rootScope);
            $rootScope.$digest();

            element.find('input').val('foo').trigger('keydown');

            $timeout.flush(100);
            expect($rootScope.filter).not.toHaveBeenCalled();

            $timeout.flush();
            expect($rootScope.filter).toHaveBeenCalledWith('foo');
        });
    });
});
