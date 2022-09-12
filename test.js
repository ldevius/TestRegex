            var regexp;

                regexp = new RegExp("^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-._\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\\\\?\=\/\+&%\$!\|@#_]*)?$");

                // Validar si el enlace es correcto
                if (regexp.test(url)) {
                    if (!url.startsWith('ftp')) {
                        var idx = url.indexOf('@');
                        if (idx > 0) {
                            if (!((url.indexOf('?') > 0) && (url.indexOf('?') < idx))) {
                                clientside_arguments.IsValid = false;
                            }
                        }
                    }
                }
                else {
                    // El enlace se refiere a una unidad de red (ej.: \\10.201.189.42[\e$] o \\bcnseat)
                    url = clientside_arguments.Value;
