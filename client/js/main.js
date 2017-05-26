$('.list-users .remove').on('click', function(e) {
  e.preventDefault();
  const $thisElement = $(this)
  const url = $thisElement.attr("href")
  const method = 'DELETE'
  $.ajax({ url, method })
    .done( response => {
      //toastr.success(response)
      $thisElement.parents('.list-group-item').remove()
    })
    .fail( () => alert("It was not possible to remove this task!! Try again..!") );

})

$('.list-users .edit').on('click', function(e) {
  e.preventDefault();
  const $thisElement = $(this)
  $thisElement
    .parents('.list-group-item')
      .find("form input")
        .removeClass("hidden")
        .focus()
        .end()
      .find("p")
        .addClass("hidden")
})

$(".edit-form").on("submit", function(e) {
  e.preventDefault();

  const $thisElement = $(this)
  const url = $thisElement.attr("action")
  const editedValue = $thisElement.find('input').val()
  const data = 'title=' + editedValue
  const method = 'PUT'

  $.ajax({
    url,
    method,
    data
  })
  .done( response => {
    $thisElement
      .siblings("p")
        .text(editedValue)
        .removeClass("hidden")
        .end()
      .find("input")
        .addClass("hidden")
    toastr.success(response)
  })
  .fail( () =>  alert("Try removing again champ!") )

})
