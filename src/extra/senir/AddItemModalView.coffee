MicroView = microModule.import('MicroView')

class AddItemModalView extends MicroView
  constructor: (@model, @$el) ->
    @$addItemSubmitBtn = @$el.querySelector('.js-btn-add-item-submit')
    @$itemNameInput = @$el.querySelector('.js-input-add-item-name')
    @$itemAmountInput = @$el.querySelector('.js-input-add-item-amount')
    super()

  setEventListeners: ->
    @model.onChange('isShowModal', =>
      isShowModal = @model.get('isShowModal')

      if isShowModal
        @show()
      else
        @hide()
    )

    @on(@$addItemSubmitBtn, 'click', =>
      @addItem()
    )

  show: ->
    @addClass(@$el, 'is-open')

  hide: ->
    @removeClass(@$el, 'is-open')

  addItem: ->
    _name = @$itemNameInput.value
    _amount = @$itemAmountInput.value
    item = { name: _name, amount: _amount }
    @model.addData(item)
    @model.set('isShowModal', false)

microModule.export(AddItemModalView)
