const productConfig = {
  lesson: {
    basic: { price: "$29", license: "1 educator", url: "https://whop.com/curravue/lesson-architecture-engine/" },
    advanced: { price: "$59", license: "Professional use", url: "https://whop.com/curravue/lesson-architecture-engine/" },
    enterprise: { price: "$149", license: "Department license", url: "https://whop.com/curravue/lesson-architecture-engine/" }
  },
  assessment: {
    basic: { price: "$24", license: "1 educator", url: "https://whop.com/curravue/formative-checkpoint-intelligence/" },
    advanced: { price: "$49", license: "Professional use", url: "https://whop.com/curravue/formative-checkpoint-intelligence/" },
    enterprise: { price: "$129", license: "Department license", url: "https://whop.com/curravue/formative-checkpoint-intelligence/" }
  },
  math: {
    basic: {
      price: "$29",
      license: "1 educator",
      url: "https://whop.com/curravue/math-educator-playbook/"
    },
    advanced: {
      price: "$49",
      license: "Professional use",
      url: "https://whop.com/curravue/math-educator-playbook/"
    },
    enterprise: {
      price: "$129",
      license: "Department license",
      url: "https://whop.com/curravue/math-educator-playbook/"
    }
  },
  automation: {
    basic: { price: "$24", license: "1 educator", url: "https://whop.com/curravue/teacher-admin-automation-suite/" },
    advanced: { price: "$49", license: "Professional use", url: "https://whop.com/curravue/teacher-admin-automation-suite/" },
    enterprise: { price: "$129", license: "Department license", url: "https://whop.com/curravue/teacher-admin-automation-suite/" }
  },
  accessibility: {
    basic: { price: "$29", license: "1 educator", url: "https://whop.com/curravue/udl-accessibility-design-system/" },
    advanced: { price: "$59", license: "Professional use", url: "https://whop.com/curravue/udl-accessibility-design-system/" },
    enterprise: { price: "$149", license: "Department license", url: "https://whop.com/curravue/udl-accessibility-design-system/" }
  },
  standards: {
    basic: { price: "$29", license: "1 educator", url: "https://whop.com/curravue/standards-expansion-engine/" },
    advanced: { price: "$59", license: "Professional use", url: "https://whop.com/curravue/standards-expansion-engine/" },
    enterprise: { price: "$149", license: "Department license", url: "https://whop.com/curravue/standards-expansion-engine/" }
  }
};

const productNames = {
  lesson: "Lesson Architecture Engine",
  assessment: "Formative Checkpoint Intelligence",
  math: "AI-Powered Math Educator Playbook",
  automation: "Teacher Admin Automation Suite",
  accessibility: "UDL & Accessibility Design System",
  standards: "Standards Expansion Engine"
};

const tierNames = {
  basic: "Solo Educator",
  advanced: "Professional",
  enterprise: "Department"
};

const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function updateProduct(productKey, tierKey) {
  const config = productConfig[productKey][tierKey];
  const price = document.querySelector(`[data-price-for="${productKey}"]`);
  const license = document.querySelector(`[data-license-for="${productKey}"]`);

  if (price) price.textContent = config.price;
  if (license) license.textContent = config.license;
}

document.querySelectorAll(".tier-select").forEach((select) => {
  select.addEventListener("change", (event) => {
    const productKey = event.target.dataset.product;
    updateProduct(productKey, event.target.value);
  });
});

document.querySelectorAll(".unlock-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productKey = button.dataset.buy;
    const selector = document.querySelector(`.tier-select[data-product="${productKey}"]`);
    const tierKey = selector.value;
    const config = productConfig[productKey][tierKey];

    if (config.url) {
      if (config.url.startsWith("mailto:")) {
        window.location.href = config.url;
      } else {
        window.open(config.url, "_blank", "noopener,noreferrer");
      }
      return;
    }

    const subject = encodeURIComponent(
      `${productNames[productKey]} - ${tierNames[tierKey]} purchase`
    );

    showToast("Checkout link is being added. Opening Curravue support.");
    window.setTimeout(() => {
      window.location.href = `mailto:support@curravue.com?subject=${subject}`;
    }, 650);
  });
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    document.querySelectorAll(".filter-button").forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    document.querySelectorAll(".product-card").forEach((card) => {
      const visible = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !visible);
    });
  });
});

const mobileToggle = document.getElementById("mobileToggle");
const primaryNav = document.getElementById("primaryNav");

mobileToggle.addEventListener("click", () => {
  const open = primaryNav.classList.toggle("open");
  mobileToggle.setAttribute("aria-expanded", String(open));
});

primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("open");
    mobileToggle.setAttribute("aria-expanded", "false");
  });
});
