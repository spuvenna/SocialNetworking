package reusable;

import java.io.File;
import java.io.FileReader;
import java.util.Properties;

import org.apache.log4j.Logger;

public class ConfigUtils {
	
		static Logger log = Logger.getLogger("ConfigUtils");

		//This method returns value for given file from property file	
		public static String retrieveValueForGivenKey(String keyName){	
			String value= null;
			try {
				String filePath = System.getProperty("user.dir") +"/src/test/java/resources/global.properties";		
				FileReader fileReader= new FileReader(new File(filePath));
				Properties props = new Properties();
				props.load(fileReader);
				value = props.getProperty(keyName);	
				log.info("Retrieved value '"+value+"' for given key '"+keyName+"'");
			} catch (Exception e) 
			{
				log.error("Encountered exception while retrieving the value for given key '"+keyName+"'--" +e.getMessage());
				e.printStackTrace();
			}
			return value;
		}
}
	

