/*
* Question: Find and print the product of all digits of a given number.
* @author: [Kuntal Ojh]
* Date: 03-07-2026
*/


import java.util.Scanner;

public class Q10 {
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a number: ");
    int n = sc.nextInt();
    int product=1;
    while (n!=0) {
      product = product * (n%10);
      n = n/10;
    }
    System.out.println("Product of all digit of a given number: "+ product);
    sc.close();
  }
}
