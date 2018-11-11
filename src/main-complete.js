const navButtons = document.querySelectorAll('#navbar ul li');
const navBar = document.querySelector('#navbar');

function wrapper() {

	const changColor = () => {
		navBar.classList.toggle('red');
	};

  const loopThrough = () => {


    for (let i = 0; i < thisButtonLength; i++) {
    	setTimeout(function() 
    		{ changColor();
    	}, 3000);

    }

  };
  loopThrough();
};

for(let i = 0; i < navButtons.length; i++) {

};
