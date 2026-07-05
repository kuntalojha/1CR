/*
* Question: Calculate and print the factorial of a given number.
* @author: [Kuntal Ojh]
* Date: 03-07-2026
*/


import java.util.Scanner;

public class Q09 {
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a number ");
    int n = sc.nextInt();
    int sum = 1;
    int i = 1;
    while (i<=n) {
      sum = sum * i;
      i++;
    }
    System.out.println("Factorial of n number: "+sum);
    sc.close();
  }
}
