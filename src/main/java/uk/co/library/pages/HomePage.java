package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.library.utility.Utility;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

//    @CacheLookup
//    @FindBy(xpath = "//span[contains(text(),'Accept All')]")
//    WebElement acceptAll;

@FindBy(xpath = "//button[@id='save']")
WebElement acceptAllBtn;

    @FindBy(xpath = "//input[@id='keywords']")
    WebElement jobTitle;
    @FindBy(id = "location")
//    @FindBy(xpath = "//input[@id='location']")
    WebElement location;
    @FindBy(xpath = "//select[@id='distance']")
    WebElement distanceDropDown;
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement moreSearchOptionsLink;
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement salaryMin;
    @FindBy(xpath = "//input[@id='salarymax']")
    WebElement salaryMax;
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salaryTypeDropDown;
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement jobTypeDropDown;
    @FindBy(xpath = "//input[@id='hp-search-btn']")
    WebElement findJobsBtn;

    public void acceptIFrameAlert() throws InterruptedException {
        Thread.sleep(2000);
        driver.switchTo().frame("gdpr-consent-notice");
        clickOnElement(acceptAllBtn);
        log.info("accept IFrame Alert : " + acceptAllBtn.toString());
    }
    public void enterJobTitle(String enterjobTitle) {
        sendTextToElement(jobTitle,enterjobTitle);
        log.info("enter job title :" + jobTitle.toString());

    }

    public void enterLocation(String enterLocation) {
        sendTextToElement(location,enterLocation);
        log.info("Enter Location :" + location.toString());

    }

    public void selectDistance(String distance) {
        selectByVisibleTextFromDropDown(distanceDropDown,distance);
        log.info("Select Distance :" + distanceDropDown.toString());
    }

    public void clickOnMoreSearchOptionLink() {
        clickOnElement(moreSearchOptionsLink);
        log.info("click On More Search Option Link : " + moreSearchOptionsLink.toString());
    }

    public void enterMinSalary(String minSalary) {
        sendTextToElement(salaryMin,minSalary);
    }

    public void enterMaxSalary(String maxSalary) {
        sendTextToElement(salaryMax,maxSalary);
    }

    public void selectSalaryType(String salaryType) {
        selectByVisibleTextFromDropDown(salaryTypeDropDown,salaryType);
    }

    public void selectJobType(String jobType) {
        selectByVisibleTextFromDropDown(jobTypeDropDown,jobType);
    }

    public void clickOnFindJobsButton() {
        clickOnElement(findJobsBtn);
    }

}
