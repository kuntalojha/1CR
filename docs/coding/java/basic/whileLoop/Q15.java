/*
* Question: Check whether the given number is an Armstrong number.
* @author: [Kuntal Ojh]
* Date: 05-07-2026
*/


import java.util.Scanner;

public class Q15 {
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a number: ");
    int n = sc.nextInt();
    int number = n;
    int count = 0;
    double sum = 0;
    int digit = 0;
    while (n!=0) {
      count++;
      n= n/10;
    }
    n = number;
    while (number!=0) {
      digit = number%10;
      sum = sum + Math.pow(digit, count);
      number = number/10;
    }
     if (n==sum) {
      System.out.println("This is a Armstrong number.");
    } else {
      System.out.println("This is not a Armstrong number");
    }
    sc.close();
  }
}
