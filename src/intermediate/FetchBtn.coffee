window.App = window.App || {}

class App.FetchBtn
  constructor: ($el) ->
    @$el = $el
    @setEventListeners()

  setEventListeners: () ->
    @$el.addEventListener 'click', () ->
      Intermediate.state.fetch()