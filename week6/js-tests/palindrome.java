import java.util.Scanner;

public class Palindrome{
	public static void main(String[] args){
		boolean polindrom = false;
		
		Scanner scan = new Scanner(System.in);
		System.out.println("write something");
		String text = scan.next();
		for (int  i=0 ; i<text.length() ; i++){
			for (int j = text.length()-1 ; j>= 0 ; j--)
			if (text.charAt(i)== text.charAt(j)){
			polindrom = true;	
			} else {
				polindrom = false;
			}
		}
		System.out.println("Did u put a polindrom? " +polindrom);
	}
}