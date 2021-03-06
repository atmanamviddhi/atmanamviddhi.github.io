// Static comments
    $("#comment-form").submit(function() {
        var form = this;

        $(form).addClass("disabled");
        $("#comment-form-submit").html(
        'Sending...'
        );

        $.ajax({
        type: $(this).attr("method"),
        url: $(this).attr("action"),
        data: $(this).serialize(),
        contentType: "application/x-www-form-urlencoded",
        success: function(data) {
            $("#comment-form-submit")
            .html("Submitted")
            .addClass("btn--disabled");
            $("#respond .js-notice")
            .removeClass("danger")
            .addClass("success");
            $("#respond form").hide()[0].reset();
            showAlert(
                '<strong>Thanks for your comment!</strong><br>'
            );
        },
        error: function(err) {
            console.log(err);
            $("#comment-form-submit").html("Submit Comment");
            $("#respond .js-notice")
            .removeClass("success")
            .addClass("danger");
            showAlert(
                "<strong>Sorry, there was an error with your submission.</strong><br>Please make sure all required fields have been completed and try again."
            );
            $(form).removeClass("disabled");
        }
        });

        return false;
    });

function showAlert(message) {
    $("#respond .js-notice").removeClass("hidden");
    $("#respond .js-notice-text").html(message);
}

function hideAlert() {
    $("#respond .js-notice").addClass("hidden");
    $("#respond .js-notice-text").html("");
}


// Staticman comment replies, from https://github.com/mmistakes/made-mistakes-jekyll
// modified from Wordpress https://core.svn.wordpress.org/trunk/wp-includes/js/comment-reply.js
// Released under the GNU General Public License - https://wordpress.org/about/gpl/
// addComment.moveForm is called from comment.html when the reply link is clicked.
var addComment = {
  // commId - the id attribute of the comment replied to (e.g., "comment-10")
  // respondId - the string 'respond', I guess
  // postId - the page slug
  moveForm: function( commId, respondId, postId, parentUid ) {
    var div, element, style, cssHidden,
    t           = this,                    //t is the addComment object, with functions moveForm and I, and variable respondId
    comm        = t.I( commId ),                                // whole comment
    respond     = t.I( respondId ),                             // whole new comment form
    cancel      = t.I( 'cancel-comment-reply-link' ),           // whole reply cancel link
    parentuidF  = t.I( 'comment-replying-to-uid' ),             // a hidden element in the comment
    post        = t.I( 'comment-post-slug' ),                   // null
    commentForm = respond.getElementsByTagName( 'form' )[0];    // the <form> part of the comment_form div

    if ( ! comm || ! respond || ! cancel || ! parentuidF || ! commentForm ) {
      return;
    }

    t.respondId = respondId;
    postId = postId || false;

    if ( ! t.I( 'sm-temp-form-div' ) ) {
      div = document.createElement( 'div' );
      div.id = 'sm-temp-form-div';
      div.style.display = 'none';
      respond.parentNode.insertBefore( div, respond ); //create and insert a bookmark div right before comment form
    }

    comm.parentNode.insertBefore( respond, comm.nextSibling );  //move the form from the bottom to above the next sibling
    if ( post && postId ) {
      post.value = postId;
    }
    parentuidF.value = parentUid;
    cancel.style.display = '';                        //make the cancel link visible

    cancel.onclick = function() {
      var t       = addComment,
      temp    = t.I( 'sm-temp-form-div' ),            //temp is the original bookmark
      respond = t.I( t.respondId );                   //respond is the comment form

      if ( ! temp || ! respond ) {
        return;
      }

      t.I( 'comment-replying-to-uid' ).value = null;
      temp.parentNode.insertBefore( respond, temp );  //move the comment form to its original location
      temp.parentNode.removeChild( temp );            //remove the bookmark div
      this.style.display = 'none';                    //make the cancel link invisible
      this.onclick = null;                            //retire the onclick handler
      return false;
    };

    /*
     * Set initial focus to the first form focusable element.
     * Try/catch used just to avoid errors in IE 7- which return visibility
     * 'inherit' when the visibility value is inherited from an ancestor.
     */
    try {
      for ( var i = 0; i < commentForm.elements.length; i++ ) {
        element = commentForm.elements[i];
        cssHidden = false;

        // Modern browsers.
        if ( 'getComputedStyle' in window ) {
          style = window.getComputedStyle( element );
        // IE 8.
        } else if ( document.documentElement.currentStyle ) {
        style = element.currentStyle;
        }

      /*
       * For display none, do the same thing jQuery does. For visibility,
       * check the element computed style since browsers are already doing
       * the job for us. In fact, the visibility computed style is the actual
       * computed value and already takes into account the element ancestors.
       */
        if ( ( element.offsetWidth <= 0 && element.offsetHeight <= 0 ) || style.visibility === 'hidden' ) {
          cssHidden = true;
        }

        // Skip form elements that are hidden or disabled.
        if ( 'hidden' === element.type || element.disabled || cssHidden ) {
          continue;
        }

        element.focus();
        // Stop after the first focusable element.
        break;
      }

    } catch( er ) {}

    return false;
  },

  I: function( id ) {
    return document.getElementById( id );
  }
};


$(document).ready(function(){
    $("#show").click(function(){
        $(".table-customised-sanskrit-sentence").show();
        $(".blank_row_sanskrit_sentence").show();
    });
    $("#hide").click(function(){
        $(".table-customised-sanskrit-sentence").hide();
         $(".blank_row_sanskrit_sentence").hide();
    });
    
});

//Hide columns

function hide_show_table(col_name)
{
     var checkbox_val=document.getElementById(col_name).value;
     if(checkbox_val=="hide")
     {
          var all_col=document.getElementsByClassName(col_name);
          for(var i=0;i<all_col.length;i++)
          {
                all_col[i].style.display="none";
          }
          document.getElementById(col_name+"_head").style.display="none";
          document.getElementById(col_name).value="show";
     }
        
     else
     {
          var all_col=document.getElementsByClassName(col_name);
          for(var i=0;i<all_col.length;i++)
          {
                all_col[i].style.display="table-cell";
          }
          document.getElementById(col_name+"_head").style.display="table-cell";
          document.getElementById(col_name).value="hide";
     }
}