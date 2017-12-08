
/**
 * 
 */

package com.lowes.pmdm.smartreview.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author mkotagi
 *
 */
@Controller
public class DashboardController {

	final Logger log = LoggerFactory.getLogger(DashboardController.class);

	@RequestMapping("/")
	public String dashboard() {
		log.info("Loading index page");
		return "forward:/index.html";
	}
}
