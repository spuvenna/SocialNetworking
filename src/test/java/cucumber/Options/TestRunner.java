package cucumber.Options;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

/**
 * @author Sowmya TestRunner class to start the framework execution Parameters
 *         Runwith, CucumberOptions with features location and glue with Step
 *         definations package name
 * 
 */

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/features", glue = { "stepDefinations" })
public class TestRunner {

}