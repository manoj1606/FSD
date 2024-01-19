package JAVA;
import java.util.*;
public class freq {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.print("Enter Any String : ");
		String a=sc.nextLine();
		System.out.print("Enter any key to search :");
		char a1=sc.next().charAt(0);
		int size=a.length();
		int ctr=0;
		for(int i=0;i<size;i++)
		{
			if(a.charAt(i)==a1)
			{
				ctr++;
			}
		}
	
		System.out.println(ctr);
		sc.close();
	}
	

}
