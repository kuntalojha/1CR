/*
* Question: Calculate the sum of all odd numbers from 1 up to n.
* @author: [Kuntal Ojh]
* Date: 03-07-2026
*/


import java.util.Scanner;

public class Q08 {
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a number ");
    int n = sc.nextInt();
    int sum = 0;
    int i = 1;
    while (i<=n) {
      if (i%2!=0) {
        sum = sum + i;
      }
      i++;
    }
    System.out.println("Sum of odd number 1 to n: "+sum);
    sc.close();
  }
}
