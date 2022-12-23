package uk.co.library.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

public class JobSearchSteps {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }
    @And("^I enter job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String enterjobTitle )  {
        new HomePage().enterJobTitle(enterjobTitle);

    }
    @And("^I enter location \"([^\"]*)\"$")
    public void iEnterLocation(String enterLocation)  {
        new HomePage().enterLocation(enterLocation);

    }
    @And("^I select distance \"([^\"]*)\"$")
    public void iSelectDistance(String distance )  {
        new HomePage().selectDistance(distance);


    }

    @And("^I click on more search options link$")
    public void iClickOnMoreSearchOptionsLink() {
        new HomePage().clickOnMoreSearchOptionLink();

    }

    @And("^I select salaryMin \"([^\"]*)\"$")
    public void iSelectSalaryMin(String minSalary)  {
        new HomePage().enterMinSalary(minSalary);

    }

    @And("^I select salaryMax \"([^\"]*)\"$")
    public void iSelectSalaryMax(String maxSalary)  {

        new HomePage().enterMaxSalary(maxSalary);

    }

    @And("^I select salaryType\"([^\"]*)\"$")
    public void iSelectSalaryType(String salaryType )  {
        new HomePage().selectSalaryType(salaryType);



    }

    @And("^I select jobType\"([^\"]*)\"$")
    public void iSelectJobType(String salaryType)  {
        new HomePage().selectJobType(salaryType);


    }

    @And("^I click on find jobs Btn$")
    public void iClickOnFindJobsBtn() {
        new HomePage().clickOnFindJobsButton();

    }

    @When("^I click on pop up$")
    public void iClickOnPopUp() throws InterruptedException {
        new HomePage().acceptIFrameAlert();
        
    }


    @And("^I get result \"([^\"]*)\"$")
    public void iGetResult(String result)  {
      new ResultPage().verifyTheResults(result);
    }
}
