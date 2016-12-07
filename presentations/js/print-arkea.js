function printIt() {
                                var diesePos = (window.location+"").indexOf('#');
                                var currentWIndow = null;
                                if(diesePos == 0){
                                        currentWindow = window.open(window.location+"?print-pdf");
                                }
                                else {
                                        currentWindow = window.open((window.location+"").substring(0,diesePos)+"?print-pdf");
                                }
                                //currentWindow.addEventListener('load',print(),true);
                        }

