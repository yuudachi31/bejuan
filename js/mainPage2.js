$(function () {
  // window.setTimeout(( () => doorflash.play() ), 4000);

  $('.ivy_light').hide()
  $('.elvis_light').hide()
  $('.david_light').hide()
  $('.screen_light').hide()
  let timeout = () => {
    setTimeout(() => {
      console.log(document.cookie)
      timeout();
    }, 2000);
  }
  timeout()


  console.log(document.cookie);
  // document.cookie = 'cookie3=value;max-age=10';
  // document.cookie = 'cookie2=value;max-age=10';
  //document.cookie = 'cookie1=val1;max-age=10';
  console.log(document.cookie);

  function getstep(name) {
    const value = `${document.cookie}`;
    console.log(value)
    const part5 = value.split(`; `);
    console.log(part5)

    for (let i = 0; i <= 3; i++) {
      const part2 = part5[i].split(`=`);
      console.log(part2)


      if (part2[0] == "Step") {
        console.log("got cookie key")
        return part2[1]
      }

    }
  }

  function getRightNum(name) {
    const value = `${document.cookie}`;
    console.log(value)
    const part5 = value.split(`; `);
    console.log(part5)

    for (let i = 0; i <= 3; i++) {
      const part2 = part5[i].split(`=`);
      console.log(part2)
      if (part2[0] == "rightNum") {
        console.log("got cookie key")
        return part2[1]
      }

    }
  }
  function getwrongNum(name) {
    const value = `${document.cookie}`;
    console.log(value)
    const part5 = value.split(`; `);
    console.log(part5)

    for (let i = 0; i <= 3; i++) {
      const part2 = part5[i].split(`=`);
      console.log(part2)
      if (part2[0] == "wrongNum") {
        console.log("got cookie key")
        return part2[1]
      }

    }
  }




  let SetStepAndNumber = () => {
    step = JSON.parse(getstep())
    console.log(step + 3)

    if (step == 1) {
      {
        for (let i = 2; i <= 8; i++)
          $('.step' + i).hide();
      }
      $('.step1').show();
    } else {
      $('.step1').hide();
      console.log('.step' + step)
      $('.step' + step).show();
    }
    wrong_num = JSON.parse(getRightNum())
    right_num = JSON.parse(getwrongNum())
if(step == 7){
  $('.wrong_num').html(` ${wrong_num} `);
  $('.right_num').html(` ${right_num} `);
}else if(step==8){
  $('.question_cont').hide();
  $('.virus').hide()
    $('.step8').show()

$('.block').hide();
}

  }
  SetStepAndNumber()

  $('.ivy').hover(
    function () {
      $('.ivy_light').show()
    }, function () { $('.ivy_light').hide() })
  $('.elvis').hover(
    function () {
      $('.elvis_light').show()
    }, function () { $('.elvis_light').hide() })
  $('.david').hover(
    function () {
      $('.david_light').show()
    }, function () { $('.david_light').hide() })
  $('.screen').hover(
    function () {
      $('.screen').css("opacity", "0.8")
      $('.screen_light').show()
    }, function () { $('.screen_light').hide() })





}
)
let mk1 = 0
let mk2 = 0
let mk3 = 0
let mask1 = anime({
  targets: ".facemask1",
  translateY: [{ value: -40, duration: 0 }, { value: 0, duration: 800 }],
  opacity: [{ value: 1, duration: 300 }],

  autoplay: false,
  loop: false,
});
let mask2 = anime({
  targets: ".facemask2",
  translateY: [{ value: -40, duration: 0 }, { value: 0, duration: 800 }],
  opacity: [{ value: 1, duration: 300 }],

  autoplay: false,
  loop: false,
});
let mask3 = anime({
  targets: ".facemask3",
  translateY: [{ value: -40, duration: 0 }, { value: 0, duration: 800 }],
  opacity: [{ value: 1, duration: 300 }],

  autoplay: false,
  loop: false,
});
let mask4 = anime({
  targets: ".facemask4",
  translateY: [{ value: -40, duration: 0 }, { value: 0, duration: 800 }],
  opacity: [{ value: 1, duration: 300 }],

  autoplay: false,
  loop: false,
});
anime({
  targets: ['.v1', '.v6', '.v11'],
  translateY: 10,
  easing: "linear",
  duration: 1000,
  direction: 'alternate',
  autoplay: true,
  loop: true

});

anime({
  targets: ['.v2', '.v7', '.v12'],
  translateY: 7,
  easing: "linear",
  duration: 1300,
  direction: 'alternate',
  autoplay: true,
  loop: true,

});

anime({
  targets: ['.v3', '.v8', '.v13'],
  translateY: 12,
  easing: "linear",
  duration: 1000,
  direction: 'alternate',
  autoplay: true,
  loop: true,


});

anime({
  targets: ['.v4', '.v9'],
  translateY: 9,
  easing: "linear",
  duration: 1200,
  direction: 'alternate',
  autoplay: true,
  loop: true,


});

anime({
  targets: ['.v5', '.v10'],
  translateY: 10,
  easing: "linear",
  duration: 1000,
  direction: 'alternate',
  autoplay: true,
  loop: true,


});
let value1 = -5;
let value2 = 10;
let virus1d = anime({
  targets: '.v1',
  translateY: [{ value: -5 }, { value: 10 }],
  easing: "linear",
  duration: 300,
  direction: 'alternate',
  autoplay: false,
});
let virus2d = anime({
  targets: '.v2',
  translateY: [{ value: -5 }, { value: 10 }],
  easing: "linear",
  duration: 300,
  direction: 'alternate',
  autoplay: false,
});
let virus3d = anime({
  targets: '.v3',
  translateY: [{ value: -5 }, { value: 10 }],
  easing: "linear",
  duration: 300,
  direction: 'alternate',
  autoplay: false,
});
let virus4d = anime({
  targets: '.v4',
  translateY: [{ value: value1 }, { value: value2 }],
  easing: "linear",
  duration: 300,
  direction: 'alternate',
  autoplay: false,
});

let virus5d = anime({
  targets: '.v5',
  translateY: [{ value: -5 }, { value: 10 }],
  easing: "linear",
  duration: 300,
  direction: 'alternate',
  autoplay: false,
});
let virus6d = anime({
  targets: '.v6',
  translateY: [{ value: value1 }, { value: value2 }],
  easing: "linear",
  duration: 300,
  direction: 'alternate',
  autoplay: false,
});
let virus7d = anime({
  targets: '.v7',
  translateY: [{ value: value1 }, { value: value2 }],
  easing: "linear",
  duration: 300,
  direction: 'alternate',
  autoplay: false,
});
let virus8d = anime({
  targets: '.v8',
  translateY: [{ value: value1 }, { value: value2 }],
  easing: "linear",
  duration: 300,
  direction: 'alternate',
  autoplay: false,
});
let virus9d = anime({
  targets: '.v9',
  translateY: [{ value: value1 }, { value: value2 }],
  easing: "linear",
  duration: 300,
  direction: 'alternate',
  autoplay: false,
});
let virus10d = anime({
  targets: '.v10',
  translateY: [{ value: value1 }, { value: value2 }],
  easing: "linear",
  duration: 300,
  direction: 'alternate',
  autoplay: false,
});
let virus11d = anime({
  targets: '.v11',
  translateY: [{ value: value1 }, { value: value2 }],
  easing: "linear",
  duration: 300,
  direction: 'alternate',
  autoplay: false,
});
let virus12d = anime({
  targets: '.v12',
  translateY: [{ value: value1 }, { value: value2 }],
  easing: "linear",
  duration: 300,
  direction: 'alternate',
  autoplay: false,
});
let virus13d = anime({
  targets: '.v13',
  translateY: [{ value: value1 }, { value: value2 }],
  easing: "linear",
  duration: 300,
  direction: 'alternate',
  autoplay: false,
});


$('.v1').hover(
  function () {
    virus1d.restart()
  }, function () { })
$('.v2').hover(
  function () {
    virus2d.restart()
  }, function () { })
$('.v3').hover(
  function () {
    virus3d.restart()
  }, function () { })
$('.v4').hover(
  function () {
    virus4d.restart()
  }, function () { })

$('.v5').hover(
  function () {
    virus5d.restart()
  }, function () { })
$('.v6').hover(
  function () {
    virus6d.restart()
  }, function () { })
$('.v7').hover(
  function () {
    virus7d.restart()
  }, function () { })
$('.v8').hover(
  function () {
    virus8d.restart()
  }, function () { })
$('.v9').hover(
  function () {
    virus9d.restart()
  }, function () { })
$('.v10').hover(
  function () {
    virus10d.restart()
  }, function () { })
$('.v11').hover(
  function () {
    virus11d.restart()
  }, function () { })
$('.v12').hover(
  function () {
    virus12d.restart()
  }, function () { })
$('.v13').hover(
  function () {
    virus13d.restart()
  }, function () { })
anime({
  targets: ".stu_st1_all .c_all .cc",
  opacity: "1",
  easing: "linear",
  duration: 800,

  autoplay: true,
  loop: true,
  delay: anime.stagger(200, { start: 200 })

});
anime({
  targets: ".stu_st2_all .c_all .cc",
  opacity: "1",
  easing: "linear",
  duration: 800,

  autoplay: true,
  loop: true,
  delay: anime.stagger(200, { start: 200 })

});

anime({
  targets: ".man_st1_all .c_all .cc",
  opacity: "1",
  easing: "linear",
  duration: 800,

  autoplay: true,
  loop: true,
  delay: anime.stagger(200, { start: 200 })

});
anime({
  targets: ".dr_st1_all .c_all .cc",
  opacity: "1",
  easing: "linear",
  duration: 800,

  autoplay: true,
  loop: true,
  delay: anime.stagger(200, { start: 200 })

});
let doorflash = anime({
  targets: ".door_light",
  opacity: "1",
  easing: "linear",
  duration: 800,
  direction: 'alternate',
  autoplay: false,
  loop: true,


});
$('.stu').hover(
  function () {
    $('.stu_st1_all').hide();
    $('.stu_st2_all').hide();
    $('.stu_t1_all').show();
    $('.stu_t2_all').show();
    if (mk1 == 0) {
      mask1.play();
      mask2.play();
      mk1 = 1
    }
  }, function () {
    $('.stu_st1_all').show();
    $('.stu_st2_all').show();
    $('.stu_t1_all').hide();
    $('.stu_t2_all').hide();
  })
$('.man').hover(
  function () {
    $('.man_st1_all').hide();
    $('.man_t1_all').show();
    if (mk2 == 0) {
      mask4.play();

      mk2 = 1
    }
  }, function () {
    $('.man_st1_all').show();

    $('.man_t1_all').hide();
  })
$('.dr_st1_all').hide()

let pppp = 3
// $('.man').hover(
//   function(){
//     $('.step7 p').html(`dada+${pppp}`);

//   },function(){

// }) 

$('.dr').hover(
  function () {
    if (mk3 == 0) {
      mask3.play();

      mk3 = 1
    }
    // $('.dr_st1_all').hide();
    // $('.dr_t1_all').show();
  }, function () {
    //   $('.dr_st1_all').show();

    // $('.dr_t1_all').hide();
  })
let right_num = 0;
let wrong_num = 0;
let step = 1;
let allpass = false;
let nextstep = function () {
  if (step == 2) {
    $('.step2').hide();
    $('.step3').show();
  } else if (step == 3) {

  }
};
$('.first_btn').click(
  function () {
    $('.step1').hide();
    $('.step2').show();
    step=2;
    document.cookie = 'Step=2';
  }
)
let updateWrongAndRightNum = function () {
  document.cookie = `rightNum=${right_num}`;
  document.cookie = `wrongNum=${wrong_num}`;
}
$('.w').click(
  function () {
    $('.block').show();
    $(this).css("background-color", "rgba(216, 119, 119, 0.781)")
    $(".as").css("background-color", "rgba(20, 255, 137, 0.815)")
    setTimeout((() => {
      $(this).css("background-color", "")
      $(".as").css("background-color", "")
      if (step == 2) {
        $('.step2').hide();
        $('.step3').show();
        document.cookie = 'Step=3';
        wrong_num += 1;
        step += 1;
        updateWrongAndRightNum()
      } else if (step == 3) {
        $('.step3').hide();
        $('.step4').show();
        document.cookie = 'Step=4';
        step += 1;
        wrong_num += 1;
        updateWrongAndRightNum()
      }
      else if (step == 4) {
        $('.step4').hide();
        $('.step5').show();
        document.cookie = 'Step=5';
        step += 1;
        wrong_num += 1;
        updateWrongAndRightNum()
      }
      else if (step == 5) {
        $('.step5').hide();
        $('.step6').show();
        document.cookie = 'Step=6';
        step += 1;
        wrong_num += 1;
        updateWrongAndRightNum()
      }
      else if (step == 6) {
        $('.step6').hide();
        $('.step7').show();
        document.cookie = 'Step=7';
        step += 1;
        wrong_num += 1;
        $('.wrong_num').html(` ${wrong_num} `);
        $('.right_num').html(` ${right_num} `);
        updateWrongAndRightNum()
      }
      $('.block').hide();
    }), 2000)
  }
)
$('.as').click(
  function () {
    console.log("you cool2")
    $(this).css("background-color", "rgba(20, 255, 137, 0.815)")
    $('.block').show();
    setTimeout((() => {
      console.log("you cool")
      $(this).css("background-color", "")
      $(".as").css("background-color", "")
      if (step == 2) {
        $('.step2').hide();
        $('.step3').show();
        
        document.cookie = 'Step=3';
        step += 1;
        right_num += 1;
        updateWrongAndRightNum()
      } else if (step == 3) {
        $('.step3').hide();
        $('.step4').show();
        document.cookie = 'Step=4';
        step += 1;
        right_num += 1;
        updateWrongAndRightNum()
      }
      else if (step == 4) {
        $('.step4').hide();
        $('.step5').show();
        document.cookie = 'Step=5';
        step += 1;
        right_num += 1;
        updateWrongAndRightNum()
      }
      else if (step == 5) {
        $('.step5').hide();
        $('.step6').show();
        document.cookie = 'Step=6';
        step += 1;
        right_num += 1;
        updateWrongAndRightNum()
      }
      else if (step == 6 && right_num < 4) {
        $('.step6').hide();
        $('.step7').show();
        document.cookie = 'Step=7';
        step += 1;
        right_num += 1;
        $('.wrong_num').html(` ${wrong_num} `);
        $('.right_num').html(` ${right_num} `);
        updateWrongAndRightNum()
      } else if (right_num == 4) {
        // $('.step6').hide();
        // $('.step8').show();
        document.cookie = 'Step=8';
        $('.question_cont').hide();
        $('.virus').fadeOut(1500, function () {
          $('.dr_t2_all').fadeIn(1000)
        })
      }
      $('.block').hide();
    }), 2000)
  }
)
$('.replay_btn').click(
  function () {
    right_num = 0;
    wrong_num = 0;
    step = 2;
    document.cookie = 'Step=2';
    updateWrongAndRightNum()
    $('.step2').show();
    $('.step7').hide();
    $('.step8').hide();
  })
  // $( ".w" ).each(function( indexX ){
  //   $(this).hover(function(){
  //     $(this).css

  //    })

  //     })