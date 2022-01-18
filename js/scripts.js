$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let list = []
    list.push($("input#item1").val());
    list.push($("input#item2").val());
    list.push($("input#item3").val());
    list.push($("input#item4").val());
    list.push($("input#item5").val());
    $("form").hide();

    let upperCaseList = []

    list.sort().forEach(function(item) {
      upperCaseList.push(item.toString().toUpperCase());
    });

    console.log(upperCaseList);
    console.log(typeof upperCaseList);
    upperCaseList.forEach(function(item) {
    $("ul#gro-list").append("<li><input type='checkbox' name='list-" + item + "'><label for='list-" + item + "'>" + item + "</label></li>");
    });
  });
});