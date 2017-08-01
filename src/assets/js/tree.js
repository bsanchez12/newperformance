var TreeView = function () {

    return {
        //main function to initiate the module
        init: function () {

            var DataSourceTree = function (options) {
                this._data  = options.data;
                this._delay = options.delay;
            };

            DataSourceTree.prototype = {

                data: function (options, callback) {
                    var self = this;

                    setTimeout(function () {
                        var data = $.extend(true, [], self._data);

                        callback({ data: data });

                    }, this._delay)
                }
            };

            // INITIALIZING TREE
           
            var treeDataSource2 = new DataSourceTree({
                data: [
                    { name: 'Distribuidor 1', type: 'folder' },
                    { name: 'Distribuidor 2 <div class="tree-actions"></div>', type: 'folder' },
                    { name: '<i class="fa fa-user-circle-o"></i> Colegio A', type: 'item'},
                    { name: '<i class="fa fa-user-circle-o"></i> Colegio B', type: 'item' }
                ],
                delay: 400
            });

           

            

            

       

            $('#FlatTree2').tree({
                dataSource: treeDataSource2,
                loadingHTML: '<img src="img/input-spinner.gif"/>',
            });

           



        }

    };

}();