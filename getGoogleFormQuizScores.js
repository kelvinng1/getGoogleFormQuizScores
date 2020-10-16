function castQuizItem_(item, itemType) {
  if (itemType === FormApp.ItemType.CHECKBOX) {
    return item.asCheckboxItem();
  }
  if (itemType === FormApp.ItemType.DATE) {
    return item.asDateItem();
  }
  if (itemType === FormApp.ItemType.DATETIME) {
    return item.asDateTimeItem();
  }
  if (itemType === FormApp.ItemType.DURATION) {
    return item.asDurationItem();
  }
  if (itemType === FormApp.ItemType.LIST) {
    return item.asListItem();
  }
  if (itemType === FormApp.ItemType.MULTIPLE_CHOICE) {
    return item.asMultipleChoiceItem();
  }
  if (itemType === FormApp.ItemType.PARAGRAPH_TEXT) {
    return item.asParagraphTextItem();
  }
  if (itemType === FormApp.ItemType.SCALE) {
    return item.asScaleItem();
  }
  if (itemType === FormApp.ItemType.TEXT) {
    return item.asTextItem();
  }
  if (itemType === FormApp.ItemType.TIME) {
    return item.asTimeItem();
  }
  if (itemType === FormApp.ItemType.GRID) {
    return item.asGridItem();
  }
  if (itemType === FormApp.ItemType.CHECKBOX_GRID) {
    return item.asCheckboxGridItem();
  }
  if (itemType === FormApp.ItemType.PAGE_BREAK) {
    return item.asPageBreakItem();
  }
  if (itemType === FormApp.ItemType.SECTION_HEADER) {
    return item.asSectionHeaderItem();
  }
  if (itemType === FormApp.ItemType.VIDEO) {
    return item.asVideoItem();
  }
  if (itemType === FormApp.ItemType.IMAGE) {
    return item.asImageItem();
  }
  return null;
}

  function getGoogleFormQuizScores() {
  
    // Returns the form to which the script is container-bound.
    var form = FormApp.getActiveForm();
  
    // Get the most recently submitted form response
    var responses = form.getResponses();
  
    // Gets an array of all items in the form.
    var items = form.getItems();
    
    for (var j=0; j<responses.length; j++) {
    //for (var j=0; j<10; j++) {
      var response = responses[j];
  
      for (var i=0; i<items.length; i++) {
  
        var question = items[i];
  
        // Get the item's title text
        var qTitle = question.getTitle();
      
        // Get the item's type like Checkbox, Multiple Choice, Grid, etc.
        var qType = question.getType();
  
        // Gets the item response contained in this form response for a given item.
        var responseForItem = response.getResponseForItem(question)
  
        //Gets the answer that the respondent submitted.
        var answer = responseForItem ? responseForItem.getResponse() : null;
         
        var item = castQuizItem_(question, qType);
  
        // Quiz Score and Maximum Points are not available
        // for Checkbox Grid and Multiple Choice Grid questions
        // through they are gradable in the Google Form
  
        if (item && typeof item.getPoints === "function") {
  
          var maxScore = item.getPoints();
          var gradableResponseForItem = response.getGradableResponseForItem(question);
          var score = gradableResponseForItem.getScore();
          var lineItem = " ";
          
          if (maxScore == "0") {
            lineItem = answer;
          } else {
            lineItem = score;
          }
          Logger.log(qTitle.substring(0,4), maxScore, lineItem);
  
        }
      }
      Logger.log("===================")
    }
  }