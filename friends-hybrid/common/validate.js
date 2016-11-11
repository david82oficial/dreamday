(function () {
    app.validate = {
        getValidator: function (selector, params) {
            return $(selector).kendoValidator(_.merge({
                validateOnBlur: true,
                rules: {
                    validateBirthDateRule: function (input) {
                        if (input.is('input[type=date]')) {
                            var selectedDate = new Date(input.val());
                            var today = new Date();

                            var selectedDateAfterToday = selectedDate > today;
                            return !selectedDateAfterToday;
                        }

                        return true;
                    },
                    validateEmailRule: function (input) {
                        if (input.is('input[name=email]') && !!input.val()) {
                            return input.val().indexOf('@') > 0;
                        }

                        return true;
                    }
                },
                messages: {
                    validateBirthDateRule: 'Por favor, verifique a data de aniversário.',
                    validateEmailRule: 'Formato de e-mail inválido.',
                    required: function (input) {
                        if (input.is('input[type=password]')) {
                            return 'Senha inválida.'
                        }

                        return 'Campo obrigatório.';
                    }
                }
            }, params)).data('kendoValidator');
        }
    }
}());