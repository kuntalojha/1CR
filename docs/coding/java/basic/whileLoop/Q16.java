/*
* Question: Check whether the given number is a Perfect number.
* @author: [Kuntal Ojh]
* Date: 05-07-2026
*/


import java.util.Scanner;

public class Q16 {
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a number: ");
    int n = sc.nextInt();
    int number = n;
    int sum = 0;
    int i = 1;
    while (n>i) {
      if (number % i ==0) {
        sum = sum +i;
      }
      i++;
    }
   
     if (n==sum) {
      System.out.println("This is a Perfect number.");
    } else {
      System.out.println("This is not a Perfect number.");
    }
    sc.close();
  }
}
