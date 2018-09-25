function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	//strokeWeight(2);
	//stroke( 100, 255, 204);
}

function draw() {
	background(204, 229, 255);



	//Neck
	strokeWeight(4);
	stroke(255, 178, 102);
	line(240, 285, 240, 345);

	strokeWeight(4);
	stroke(255, 178, 102);
	line(260, 285, 260, 345);



  //Wheel
	strokeWeight(4);
	stroke(255, 178, 102);
	fill(204, 102, 0);
	ellipse(250, 465, 70, 70);

	//Arms


	strokeWeight(4);
	stroke(255, 178, 102);
	line(360, 275, 280, 345);

	strokeWeight(4);
	stroke(255, 178, 102);
	line(380, 275, 300, 345);

	strokeWeight(4);
	stroke(255, 178, 102);
	line(120, 275, 200, 345);

	strokeWeight(4);
	stroke(255, 178, 102);
	line(140, 275, 220, 345);

	/*sstrokeWeight(4);
	stroke(255, 178, 102);
	fill(204, 102, 0);
	ellipse(132, 275, 30, 30);*/
	arc(128, 260, 40, 40, 0, PI);

	arc(375, 260, 40, 40, 0, PI);

	/*strokeWeight(4);
	stroke(255, 178, 102);
	fill(204, 102, 0);
	ellipse(372, 275, 30, 30);*/

	//Body
	strokeWeight(4);
	fill(255, 128, 0);
	rect(200, 325, 100, 140, 10);
	stroke( 255, 178, 102);

	//ears
	strokeWeight(4);
	stroke(255, 178, 102);
	fill(204, 102, 0);
	ellipse(205, 240, 30, 30);

	strokeWeight(4);
	stroke(255, 178, 102);
	fill(204, 102, 0);
	ellipse(295, 240, 30, 30);




	//Head
	strokeWeight(4);
	fill(255, 128, 0);
	ellipse(250, 240, 90, 90);
	stroke( 100, 0, 255);

	//mouth
  strokeWeight(3);
	stroke(51, 153, 255);
	fill(102, 178, 255, 200);
	ellipse(250, 265, 30, 21);

	//dente
	noStroke();
	fill(255, 255, 255);
	rect(252, 255, 7, 10, 5, 5);

  //dente
	noStroke();
	fill(255, 255, 255);
	rect(242, 255, 7, 10, 5, 5);

	noFill();
	strokeWeight(3);
	stroke(51, 153, 255);
	ellipse(250, 265, 30, 21);

	//antenne
	strokeWeight(3);
	stroke(153, 76, 0);
	line(220, 220, 200, 170);

  fill(255, 128, 0);
	strokeWeight(5);
	stroke(153, 76, 0);
	ellipse(200, 170, 10, 10);

	strokeWeight(3);
	stroke(153, 76, 0);
	line(280, 220, 300, 170);

  fill(255, 128, 0);
	strokeWeight(5);
	stroke(153, 76, 0);
	ellipse(300, 170, 10, 10);



	//occhiali
	fill(255, 255, 255);
	strokeWeight(5);
	stroke(153, 76, 0);
	ellipse(230, 230, 30, 30);

	strokeWeight(5);
	stroke(153, 76, 0);
	ellipse(270, 230, 30, 30);
	fill(255, 255, 255);

	strokeWeight(5);
	stroke(153, 76, 0);
	line(246, 230, 254,230);

	//occhi
	fill(102, 178, 255);
	noStroke();
	ellipse(235, 230, 12, 10);

	fill(255, 255, 255);
	noStroke();
	ellipse(237, 230, 3, 3);

	fill(102, 178, 255);
	noStroke();
	ellipse(275, 230, 12, 10);

	fill(255, 255, 255);
	noStroke();
	ellipse(277, 230, 3, 3);

  //biro
	noStroke();
	fill(0, 0, 0);
	rect(270, 333, 5, 34, 5, 5, 5, 5);

	//pannelloComandi
	stroke(255, 178, 102);
	strokeWeight(3);
	fill(153, 76, 0);
	rect(250, 345, 30, 34, 5, 5, 35, 35);



















}
