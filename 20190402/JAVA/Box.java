import java.util.*;
public class Box
{
	public static void main(String[] args)
	{
		Scanner scanner = new Scanner(System.in);
		System.out.print("请输入要转换的字符:");
		String num = scanner.next();
		char special = num.charAt(0);
		int result = year(special);
		System.out.print("转换后的字符为:"+result);
	}
	public static int year(char s)
	{
		return s;
	}
	
}