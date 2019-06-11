import java.util.Scanner;


public class TestYourself {
	
	public static void main (String[] args){
		int answer = 0;
		int sum = 0;
		Scanner scan = new Scanner(System.in);
		System.out.println("       **Hello, Welcome to the MOVIES EXPERT Quiz **\n ************************* \n Please, choose your  answer 1-4\n ~~~~~~~~~~~ \n");
		
		System.out.print("     Question 1:  \n Where did Harry Potter go to school? \n 1) Neverland \n 2) Mordor\n 3) Hogwarts\n 4) Dreamland\n");				 		
		System.out.println("********************************");
		answer = scan.nextInt();
		if (answer==3){
			sum +=10;
		}
		
		System.out.print ("	Question 2:  \n Who sang the thems song  from Titanic? \n 1) Celine Dion \n 2) Beyonce \n 3) Madonna \n 4) Barbara Steisand \n");		 		 
		System.out.println("********************************\n");
		answer = scan.nextInt();
		if (answer==1){
			sum +=10;
		}
		
		System.out.println("	Question 3:  \n How do Anna and Elsa know each other in Frozen? \n "+
			"1) Neighbors \n "+
			"2) Sisters \n "+
			"3) Freinds \n "+
			"4) Cousins\n");
		System.out.println("********************************\n");
		answer = scan.nextInt();
		if (answer==3){
			sum +=10;
		}
		
		System.out.println("	Question 4:  \n Who directed Inception ?\n "+
			"1) Paul Thomas Anderson \n "+
			"2) Martin Scorsese \n "+
			"3) Quentin Tarantino \n "+
			"4) Christopher Nolan\n ");
		System.out.println("********************************\n");
		answer = scan.nextInt();
		if (answer==4){
			sum +=10;
		}
		
		System.out.println("	Question 5:  \n What subject does Profesor Snape teach ?\n "+
			"1) Charms \n "+
			"2) History of Magic \n "+
			"3) Defense Against the Dark Arts \n "+
			"4) Potions\n");
		System.out.println("********************************\n");
		answer = scan.nextInt();
		if (answer==3){
			sum +=10;
		}
		
		System.out.println("	Question 6:  \n Who directed Avatar ?\n "+
			"1) Steven Spielberg \n "+
			"2) James Cameron \n"+ 
			"3) Francis Ford Coppola\n"+ 
			"4) George Lucas\n");
		System.out.println("********************************\n");
		answer = scan.nextInt();
		if (answer==2){
			sum +=10;
		}
		
			System.out.println("	Question 7:  \n Who is Simba uncle? \n "+
			"1) Scar \n "+
			"2) Amos \n "+
			"3) Zazou\n "+
			"4) Slade\n");
		System.out.println("********************************\n");
		answer = scan.nextInt();
		if (answer==1){
			sum +=10;
		}
		
				System.out.println("	Question 8:  \n How many kids did Gru adopt? \n "+
			"1) 1 \n "+
			"2) 2 \n "+
			"3) 3\n"+ 
			"4) 4\n");
		System.out.println("********************************\n");
		answer = scan.nextInt();
		if (answer==3){
			sum +=10;
		}
		
				System.out.println("	Question 9:  \n Which of these is NOT a real Lord Of The Rings Movie? \n "+
			"1) The Fellowship of the Ring  \n "+
			"2) The Two Towers\n "+
			"3) The End of rhe One Ring\n "+
			"4) The Return of the King\n");
		System.out.println("********************************\n");
		answer = scan.nextInt();
		if (answer==3){
			sum +=10;
		}
		
		
				System.out.println("	Question 10:  \n How many Hanger Games were there? \n "+
			"1) 2 \n "+
			"2) 4 \n"+
			"3) 6\n"+
			"4) 8\n");
		System.out.println("********************************\n");
		answer = scan.nextInt();
		if (answer==2){
			sum +=10;
		}
		
		
		scan.close();
		
		if (sum >80){
			System.out.println ("Hey, You are an expert!!   BRAVOW!!!! you got the medal of an expert movie  medal quiz world!! ");
		}else if (sum>60){
			System.out.println ("Good for you! you know prety much!! keep on!");
		    } else if (sum>40){
				System.out.println ("Well you know something .....");		
			} else if (sum > 20){
				System.out.println ("Go See Some Movies.....");
			} else {
				System.out.println ("That was bad....");
			}
		
	}
}