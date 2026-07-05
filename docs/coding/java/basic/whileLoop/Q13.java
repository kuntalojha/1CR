/*
* Question: Check whether the given number is a palindrome.
* @author: [Kuntal Ojh]
* Date: 05-07-2026
*/


import java.util.Scanner;

public class Q13 {
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a number: ");
    int n = sc.nextInt();
    int number = n;
    int reverse = 0;
    while (n!=0) {
      reverse = reverse*10 + (n%10);
      n= n/10;
    }
    if (number==reverse) {
      System.out.println("This is a palindrom.");
    } else {
      System.out.println("This is not a palindrom");
    }
    sc.close();
  }
}
