package stepDefinations;

import org.apache.log4j.Logger;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	public static String currentScenarioName;
	static Logger log = Logger.getLogger("Hooks");

	@Before
	public void beforeExecOfEachScenario(Scenario cucumberScenario){
		currentScenarioName=cucumberScenario.getName();
		log.info("***********************************************************************************************");
		log.info("Execution is started for the scenario "+currentScenarioName+" successfully*********************");
	}

	@After
	public void afterExecOfEachScenario(){		
		log.info("Execution is completed for the scenario "+currentScenarioName+" successfully********************");
		log.info("************************************************************************************************");	
	}
}
