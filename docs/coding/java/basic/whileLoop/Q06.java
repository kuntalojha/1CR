/*
* Question: Calculate and print the sum of the first n natural numbers.
* @author: [Kuntal Ojh]
* Date: 03-07-2026
*/


import java.util.Scanner;

public class Q06 {
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a number ");
    int n = sc.nextInt();
    int sum = 0;
    System.out.println("Enter a number:");
    while (n>=0) {
      sum = sum + n;
      n--;
    }
    System.out.println("Sum of n natural number "+sum);
    sc.close();
  }
}
