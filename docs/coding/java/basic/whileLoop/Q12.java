/*
* Question: Reverse the given number and print the reversed value.
* @author: [Kuntal Ojh]
* Date: 05-07-2026
*/


import java.util.Scanner;

public class Q12 {
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a number: ");
    int n = sc.nextInt();
    int reverse = 0;
    while (n!=0) {
      reverse = reverse*10 + (n%10);
      n= n/10;
    }
    System.out.println("Reverse the given number: "+ reverse);
    sc.close();
  }
}
