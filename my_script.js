

const close_btn = document.getElementById('close-btn');
let current_set_goal_button = null;

let curr_goal = null;
let is_cal = false;
let is_hr = false;
let is_steps = false;
let is_sleep = false;

// All the Goal Inputs
let calories = null;
let heart_rate = null;
let steps = null;
let sleep = null;
let cal_achieved = null;
let hr_achived = null;
let steps_achived = null;
let sleep_achived = null;

function setCurrentGoal(set_goal){
  if(set_goal === 'cal')
    if(is_cal)
      curr_goal = 'cal'
    else
      curr_goal = null;
  else if(set_goal === 'hr')
    if(is_hr)
      curr_goal = 'hr';
    else
      curr_goal = null;
  else if(set_goal === 'steps')
    if(is_steps)
      curr_goal = 'steps';
    else
      curr_goal = null;
  else if(set_goal === 'sleep'){
    if(is_sleep)
      curr_goal = 'sleep';
    else
      curr_goal = null;
  }
}

function validateGoals(goal_clicked){
  if(curr_goal !== null)
    if(goal_clicked !== curr_goal)
      curr_goal = null;
      
}

function areAllGoalsSet(){
  console.log(cal_achieved);
  console.log(hr_achived);
  console.log(steps_achived);
  console.log(sleep_achived);
  
  return !(cal_achieved === null || hr_achived === null || steps_achived === null || sleep_achived === null);
}

function goal_graphs(){
  var element = document.getElementById("heart_rate");
  
  element.setAttribute("src", "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_square.jpg");
  
  element.setAttribute("style", "width: 100px; height: 100px;");
  
}

function open_input_popup(class_name){ 
    const input_popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
  input_popup.classList.add('active');
  overlay.classList.add('active');
  const v_name = document.getElementById(class_name);
  current_set_goal_button = v_name;
  v_name.classList.add('active_popup');
}

function close_input_popup(){
    const input_popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
  input_popup.classList.remove('active');
  overlay.classList.remove('active');
  current_set_goal_button.classList.remove('active_popup');
}

function setInputValues(goal){
  if(goal === 'calories')
    {
      calories = document.getElementById('cal_input').value;
      calories = parseInt(calories);
      if(!Number.isNaN(calories)){
        document.getElementById('write_cal').innerHTML = "Calories to burn: " + calories;
        curr_goal = 'cal';
        is_cal = true;
      }
      else{
        alert("Please enter a number.");
      }
      
    }
  else if(goal === 'enter-data'){
    let is_data_entered_good = false;
    if(curr_goal === 'cal'){
      cal_achieved = document.getElementById('enter-data').value;
      cal_achieved = parseInt(cal_achieved);
      if(!Number.isNaN(cal_achieved)){
        document.getElementById('write_achieved').innerHTML = "Reached so far: " + cal_achieved;
        is_data_entered_good = !is_data_entered_good;
      }
      else{
        alert('Please enter a number.');
      }
    }
    else if(curr_goal === 'hr'){
      hr_achived = document.getElementById('enter-data').value;
      hr_achived = parseInt(hr_achived);
      if(!Number.isNaN(hr_achived)){
        document.getElementById('write_achieved_hr').innerHTML = "Current Heart Rate: " + hr_achived;
        is_data_entered_good = !is_data_entered_good;
      }
      else{
        alert('Please enter a number.');
      }
    }
    else if(curr_goal === 'steps'){
      steps_achived = document.getElementById('enter-data').value;
      steps_achived = parseInt(steps_achived);
      if(!Number.isNaN(steps_achived)){
        document.getElementById('write_achieved_steps').innerHTML = "You walked so far: " + steps_achived;
        is_data_entered_good = !is_data_entered_good;
      }
      else{
        alert('Please enter a number.');
      }
    }
    else if(curr_goal === 'sleep'){
      sleep_achived = document.getElementById('enter-data').value;
      sleep_achived = parseInt(sleep_achived);
      if(!Number.isNaN(sleep_achived)){
        document.getElementById('write_achieved_sleep').innerHTML = "You slept so far: " + sleep_achived;
        is_data_entered_good = !is_data_entered_good;
      }
      else{
        alert('Please enter a number.');
      }
    }
    else
      alert('Set the goal first.');
    if(is_data_entered_good)
      curr_goal = null;
  }
    
  else if(goal === 'heart_rate'){
    heart_rate = document.getElementById('hr-input').value;
    heart_rate = parseInt(heart_rate);
    if(!Number.isNaN(heart_rate)){
      document.getElementById('write_hr').innerHTML = "Heart Rate to achieve: " + heart_rate;
      curr_goal = 'hr';
      is_hr = true;
    }
    else{
      alert('Please enter a number.');
    }
    
  } 
  else if(goal === 'steps'){
    steps = document.getElementById('steps_input').value;
    steps = parseInt(steps);
    if(!Number.isNaN(steps)){
      document.getElementById('write_steps').innerHTML = "Steps to walk: " + steps;
      curr_goal = 'steps';
      is_steps = true;
    }
    else{
      alert('Please enter a number.');
    }
    
  }  
  else if(goal === 'sleep'){
    sleep = document.getElementById('sleep_input').value;
    sleep = parseInt(sleep);
    if(!Number.isNaN(sleep)){
      document.getElementById('write_sleep').innerHTML = "Sleep Hours: " + sleep;
      curr_goal = 'sleep';
      is_sleep = true;
    }
    else{
     alert('Please enter a number.'); 
    }
  }
  else
    console.log("Bad Value!");
  
  if(areAllGoalsSet())
      fillProgressBar();
  close_input_popup();
}

function calculateProgressBar(){
  let res = 0;
  let goal_diff;
  let goal_list = [calories, heart_rate, steps, sleep];
  let ach_list = [cal_achieved, hr_achived, steps_achived, sleep_achived];
  for(let i = 0; i < goal_list.length; i++){
    goal_diff = percentage_diff(goal_list[i], ach_list[i]);
    res += goal_diff;  
  }
  res /= goal_list.length;
  return res;
}

function percentage_diff(set_goal, goal_achieved){
  let res = Math.abs(set_goal - goal_achieved);
  res = set_goal > goal_achieved ? (res/set_goal) : (res/goal_achieved);
  return 1-res;
}

function fillProgressBar(){
  let progress_bar = document.getElementById('stamina-progress-bar');
  let progress = calculateProgressBar()*100;
  progress_bar.setAttribute("style", "width: " + progress + "%;");
  
  let stamina_display = document.getElementById('st-display');
  stamina_display.innerHTML = "Stamina: " + Math.floor(progress) + "%";
  setAvatar(progress);
}

function setAvatar(stamina){
  let avatar_image = document.getElementById('avatar_img');
   avatar_image.setAttribute("src", "https://thumbs.dreamstime.com/b/toilet-man-sign-use-signs-buttons-toilet-sign-use-signs-buttons-white-background-179034581.jpg");
}