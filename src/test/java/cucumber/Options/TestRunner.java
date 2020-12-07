package cucumber.Options;

import org.apache.log4j.Logger;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

/**
 * @author Sowmya TestRunner class to start the framework execution Parameters
 *         Runwith, CucumberOptions with features location and glue with Step
 *         definations package name
 * 
 */

@RunWith(Cucumber.class)
@CucumberOptions(features = "D:\\Selenium_Workspace\\SocialNetworking\\src\\test\\java\\features",
		snippets = SnippetType.CAMELCASE,
		glue = {"stepDefinations"},
		plugin = {"html:target/cucumberexecreport","json:target/cucumber.json"}, 
		monochrome = true,
		tags= "@testAPIValues",
		dryRun = false 
		)
public class TestRunner {
	
	static Logger log = Logger.getLogger("TestRunner");

	@BeforeClass
	public static void startTest() {
		log.info("------------------------------------Test Case Execution started ----------------------------------------------");	
	}


	@AfterClass
	public static void endTest() {
		log.info("------------------------------------Test Case Execution is ended--------------------------------------------------");
	}

}