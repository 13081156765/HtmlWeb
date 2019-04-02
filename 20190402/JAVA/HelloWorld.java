import java.util.*;
public class HelloWorld
{
        public static void main(String [] args)
		{
		    int age1 = 23;
			int age2 = 30;
			System.out.print(age1+age2);
			
			int i = 19;
			System.out.println(Integer.toBinaryString(i));
			System.out.println(Integer.toHexString(i));
			System.out.println(Integer.toOctalString(i));
			
			long num1 = 12345678901l;
			System.out.println(num1);
			float num2 = 3.1415926f;
			System.out.println(num2);
			double num3 = 1234567890.0987654321;
			System.out.println(num3);
			
			Random r = new Random();
			int rInt = r.nextInt(26);
			System.out.println(rInt);
			char c = (char)('A'+rInt);
			System.out.println(c);
			
			char a = 97;
			System.out.println(a);
			System.out.println((int)a);
			
			char b = '0';
			System.out.println((int)b);
		}
}