import java.util.*;
public class Box
{
	public static void main(String[] args)
	{
		Scanner scanner = new Scanner(System.in);
		System.out.print("������Ҫת�����ַ�:");
		String num = scanner.next();
		char special = num.charAt(0);
		int result = year(special);
		System.out.print("ת������ַ�Ϊ:"+result);
	}
	public static int year(char s)
	{
		return s;
	}
	
}