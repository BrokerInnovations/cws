(function() {
    'use strict';

    angular
        .module('cws')
        .controller('HomeController', HomeController);

    //HomeController.$inject = ['$window', '$state'];

    /* @ngInject */
    function HomeController($scope) {
        var vm = this;
        vm.searchSection = '';
        vm.searchZone = '';
        vm.searchRow = '';
        vm.final = 0;
        vm.zoneSelect = '';
        vm.rowSelect = '';
        vm.sectionSelect = '';
        vm.zoneValue = '';
        vm.zoneSortValue = '';
        vm.show = false;
        vm.zoneBaseEdit = zoneBaseEdit;
        vm.getPrice = getPrice;
        vm.zoneChange = zoneChange;
        vm.sectionChange = sectionChange;
        vm.update = update;
        vm.zoneSort = zoneSort;
        vm.sectionSort = sectionSort;
        vm.rowSort = rowSort;
        vm.sectionOptions = [];
        vm.rowOptions = [];

        function update() {
            console.log(vm.zoneTable);
            console.log(vm.updatedSectionTable);
            console.log(vm.rowTable);
        }

        function zoneSort() {
            vm.zoneSortValue = vm.zoneValue
        }

        function sectionSort() {
            vm.sectionSortValue = vm.sectionValue
        }

        function rowSort() {
            vm.rowSortValue = vm.rowValue
        }

        function sectionChange() {
            //console.log('test');
            var array = [];
            var level = '';
            vm.updatedSectionTable.map(function(data) {
                if(data.section_desc === vm.sectionSelect) {
                    level = data.level_id
                }
            });
            vm.rowTable.map(function(data) {
                if(data.level_id === level) {
                    array.push(data.row_descr);
                }
            });
            vm.rowOptions = array;
        }

        function zoneChange(){
            var array = [];
            vm.updatedSectionTable.map(function(data) {
                if(data.zone_descr === vm.zoneSelect) {
                    array.push(data.section_desc);
                }
            });
            vm.sectionOptions = array;
        }

        function getPrice() {
            vm.show = true;
            var base = 0,section = 0,row = 0;
            console.log(vm.zoneSelect,vm.sectionSelect,vm.rowSelect);
            vm.zoneTable.map(function(data) {
                if(data.zone_descr === vm.zoneSelect) {
                    base = data.zone_base_price;
                    console.log(base);
                }
            });
            vm.updatedSectionTable.map(function(data) {
                if(data.section_desc === vm.sectionSelect) {
                    section = data.section_price_offset_pct;
                    console.log(section);
                }
            });
            vm.rowTable.map(function(data) {
                if(data.row_descr === vm.rowSelect) {
                    row = data.row_price_offset_pct;
                    console.log(row);
                }
            });
            var temp = parseInt(section) + parseInt(row);

            vm.final = base * ( 1 + (temp)/100);
        }

        vm.sectionTable = [{
            "id":"1",
            "section_desc":"119",
            "section_price_offset_pct":"0",
            "zone_descr":"100 Endzone South",
            "level_id" : "1"
        },
        {
            "id":"2",
            "section_desc":"120",
            "section_price_offset_pct":"0",
            "zone_descr":"100 Endzone South",
            "level_id" : "1"
        },
        {
            "id":"3",
            "section_desc":"121",
            "section_price_offset_pct":"0",
            "zone_descr":"100 Endzone South",
            "level_id" : "1"
        },
        {
            "id":"4",
            "section_desc":"122",
            "section_price_offset_pct":"0",
            "zone_descr":"100 Endzone South",
            "level_id" : "1"
        },
        {
            "id":"5",
            "section_desc":"123",
            "section_price_offset_pct":"0",
            "zone_descr":"100 Endzone South",
            "level_id" : "1"
        },
        {
            "id":"6",
            "section_desc":"124",
            "section_price_offset_pct":"0",
            "zone_descr":"100 Endzone South",
            "level_id" : "1"
        },
        {
            "id":"7",
            "section_desc":"219",
            "section_price_offset_pct":"0",
            "zone_descr":"100 Endzone North",
            "level_id" : "1"
        },
        {
            "id":"8",
            "section_desc":"399",
            "section_price_offset_pct":"0",
            "zone_descr":"100 Corners",
            "level_id" : "3"
        },
        {
            "id":"9",
            "section_desc":"489",
            "section_price_offset_pct":"0",
            "zone_descr":"100 Midfield Beach",
            "level_id" : "2"
        }];
        vm.rowTable = [{
            "id":"1",
            "level_descr": "100 level",
            "row_descr": "1",
            "row_price_offset_pct": "100",
            "level_id" : "1"
        }, {
            "id":"2",
            "level_descr": "200 level",
            "row_descr": "2",
            "row_price_offset_pct": "35",
            "level_id" : "2"
        }, {
            "id":"3",
            "level_descr": "300 level",
            "row_descr": "3",
            "row_price_offset_pct": "25",
            "level_id" : "3"
        }, {
            "id":"4",
            "level_descr": "400 level",
            "row_descr": "4",
            "row_price_offset_pct": "17",
            "level_id" : "4"
        }, {
            "id":"5",
            "level_descr": "100 level",
            "row_descr": "5",
            "row_price_offset_pct": "13",
            "level_id" : "1"
        }, {
            "id":"6",
            "level_descr": "100 level",
            "row_descr": "6",
            "row_price_offset_pct": "10",
            "level_id" : "1"
        }, {
            "id":"7",
            "level_descr": "200 level",
            "row_descr": "7",
            "row_price_offset_pct": "7",
            "level_id" : "2"
        }, {
            "id":"8",
            "level_descr": "100 level",
            "row_descr": "8",
            "row_price_offset_pct": "5",
            "level_id" : "1"
        }, {
            "id":"9",
            "level_descr": "300 level",
            "row_descr": "9",
            "row_price_offset_pct": "5",
            "level_id" : "3"
        }];
        vm.zoneTable = [{
            "id":"1",
            "qty_to_broadcast": "30",
            "zone_base_price": "140.00",
            "zone_descr": "100 Endzone South"
        }, {
            "id":"2",
            "qty_to_broadcast": "100",
            "zone_base_price": "130.00",
            "zone_descr": "100 Endzone North"
        }, {
            "id":"3",
            "qty_to_broadcast": "0",
            "zone_base_price": "0.00",
            "zone_descr": "100 Corners"
        }, {
            "id":"4",
            "qty_to_broadcast": "0",
            "zone_base_price": "0.00",
            "zone_descr": "100 Sideline Beach"
        }, {
            "id":"5",
            "qty_to_broadcast": "0",
            "zone_base_price": "0.00",
            "zone_descr": "100 Sideline Beach"
        }, {
            "id":"6",
            "qty_to_broadcast": "100",
            "zone_base_price": "250.00",
            "zone_descr": "100 Midfield Beach"
        }, {
            "id":"7",
            "qty_to_broadcast": "50",
            "zone_base_price": "300.00",
            "zone_descr": "100 Midfield Club"
        }, {
            "id":"8",
            "qty_to_broadcast": "0",
            "zone_base_price": "0",
            "zone_descr": "100 Sideline Club"
        }, {
            "id":"9",
            "qty_to_broadcast": "10",
            "zone_base_price": "150.00",
            "zone_descr": "200 Endzone South"
        }];
        vm.updatedSectionTable = [];
        tableUpdate();
        function tableUpdate() {
            var array = [];
            vm.zoneTable.map(function(row) {
                vm.sectionTable.map(function(sectionRow) {
                    if(row.zone_descr === sectionRow.zone_descr) {
                        sectionRow.value = row.zone_base_price;
                        array.push(sectionRow);
                    }
                });
            });
            vm.updatedSectionTable = array;
        }
        function zoneBaseEdit(id, base_value,qty_value) {
            vm.zoneTable.map(function(data) {
                if(data.id === id) {
                    data.zone_base_price = base_value;
                    data.qty_to_broadcast = qty_value;
                }
            });
            console.log(vm.zoneTable);
            tableUpdate();
        }
    }
})();
