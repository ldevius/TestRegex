        var validacionLink = function(source, clientside_arguments) {
            clientside_arguments.IsValid = true;

            var url = clientside_arguments.Value;
            if ((url == "") ||
        (url.indexOf(' ') >= 0) ||
        (url.indexOf('\'') >= 0) ||
        (url.indexOf('"') >= 0) ||
        (url.indexOf('\º') >= 0) ||
        (url.indexOf('\ª') >= 0) ||
        (url.indexOf('\/\/\/') >= 0) ||
        (url.indexOf('\\\\\\') >= 0) ||
        (url.indexOf('\\\/') >= 0) ||
        (url.indexOf('\/\\') >= 0)) {
                clientside_arguments.IsValid = false;
            }

            var regexp;
            var prefijo = url.substring(1, 2);
            // Se comprueba si la url se refiere a una unidad mapeada (ej.: Z:\ o Z:/)
            //  En este caso la url ya viene bien formateada
            if (prefijo != "\:") {
                if (!url.startsWith('ftp') && !url.startsWith('http'))
                    url = 'http://' + url;

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

                }
            }
            if (url.replace('http://', '').replace('https://', '').replace('ftp://', '').replace('ftps://', '').trim() == '') {
                clientside_arguments.IsValid = false;
            }

            $('[ID$=txtLink]').val(url);
        };
