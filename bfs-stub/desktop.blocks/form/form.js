modules.define('form', ['i-bem__dom'], function(provide, BEMDOM) {
    
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            'js': {
                'inited': function() {
                    this.bindTo('submit', function(e) {
                        this._onSubmit(e);
                    });

                    // Подписаться на БЭМ-событие 'submit'
                    // и вывести в консоль сообщение 'BEM-event'
                    this.on('submit', function() {
                        console.log('BEM-event');
                    });
                }
            }
        },
        
        _onSubmit: function(e) {
            e.preventDefault();
            this.emit('submit'); // Сгенерировать БЭМ-событие 'submit'
            console.log('prevented');
        },

        getVal: function() {
            return this.domElem.serialize();
        }
    }));

});