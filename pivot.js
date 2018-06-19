 $(function(){
                var dataClass = $.pivotUtilities.SubtotalPivotData;
                var renderers = $.extend(
                      $.pivotUtilities.subtotal_renderers.jp,
                      $.pivotUtilities.plotly_renderers.jp,
                      $.pivotUtilities.export_renderers.jp
                    );
                var aggregators = $.extend($.pivotUtilities.locales.jp.aggregators,$.pivotUtilities.subtotal_aggregators)
                var parseAndPivot = function(f) {
                    $("#output").html("<p align='center' style='color:grey;'>(processing...)</p>")
                    Papa.parse(f, {
                        skipEmptyLines: true,
                        error: function(e){ alert(e) },
                        complete: function(parsed){
                            $("#output").pivotUI(parsed.data, {dataClass: dataClass,
                              aggregators: aggregators,
                              renderers: renderers,
                              rendererOptions: {
                                  arrowCollapsed: "[+] ",
                                  arrowExpanded: "[-] ",
                                  collapseRowsAt: 0 ,
                                  table: {
                                      eventHandlers: {
                                          "click": function(e, value, filters, pivotData){
                                              var names = [];
                                              pivotData.forEachMatchingRecord(filters,
                                                  function(record){ names.push(JSON.stringify(record)); });
                                              alert(JSON.stringify(record));
                                          }
                                     }
                                 }
                              }
                            },
                false, "jp");
                        }
                    });
                };

                $("#csv").bind("change", function(event){
                    parseAndPivot(event.target.files[0]);
                });

                $("#textarea").bind("input change", function(){
                    parseAndPivot($("#textarea").val());
                });

                var dragging = function(evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    evt.originalEvent.dataTransfer.dropEffect = 'copy';
                    $("body").removeClass("whiteborder").addClass("greyborder");
                };

                var endDrag = function(evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    evt.originalEvent.dataTransfer.dropEffect = 'copy';
                    $("body").removeClass("greyborder").addClass("whiteborder");
                };

                var dropped = function(evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    $("body").removeClass("greyborder").addClass("whiteborder");
                    parseAndPivot(evt.originalEvent.dataTransfer.files[0]);
                };

                $("html")
                    .on("dragover", dragging)
                    .on("dragend", endDrag)
                    .on("dragexit", endDrag)
                    .on("dragleave", endDrag)
                    .on("drop", dropped);


             });


