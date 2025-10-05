export type ChartPoint = { name: string; value: number };

export type Plan = {
  id: string;
  slug: string;
  title: string;
  category: "Heat" | "Air" | "Land";
  heroImage: string;
  summary: string;
  doctorsNote: string;
  keyStat: string;
  vitals: { label: string; value: string }[];
  symptoms: string[];
  diagnosis: string;
  prescriptions: { label: string; detail: string }[];
  expectedOutcomes: string[];
  charts: {
    id: string;
    title: string;
    type: "line" | "area" | "bar";
    unit?: string;
    data?: ChartPoint[];
    // optional combined series for charts that include multiple series
    series?: {
      lowess?: ChartPoint[];
      annual?: ChartPoint[];
    };
    note?: string;
  }[];
  gallery: { src: string; caption: string }[];
  datasets: {
    name: string;
    description: string;
    link?: string;
    caveats?: string;
  }[];
  references: { label: string; link?: string }[];
};

export const plans: Plan[] = [
  {
    id: "uhi",
    slug: "rising-temperatures-urban-heat-islands",
    title: "Rising Temperatures (Urban Heat Islands)",
    category: "Heat",
    heroImage: "/heat_hero",
    summary:
      "The planet is in risk of overheating, with global temperatures rising to record breaking numbers.",
    doctorsNote:
        "My patient has a persistent fever—global temperatures have risen about 1.1 °C since 1880, with recent years peaking near 1.2 °C above baseline. The overheating is caused by excess greenhouse gases and loss of natural cooling systems, and urgent treatment is needed to prevent lasting damage.",
    keyStat: "2016 and 2020 tied as the warmest years on record at ≈1.2 °C (2.2 °F) above the late-19th century average",
    vitals: [
        { label: "Temperature increase since 1880", value: "≈ 1.1 °C" },
        { label: "Recent warming rate", value: "≈ 0.15–0.20 °C per decade" },
        { label: "Predominant warming era", value: "Since ~1975, warming accelerated" }
    ],
    symptoms: [
      "Long-term upward trend in Earth’s average temperature",
      "Warming oceans and rising sea levels",
      "Shrinking glaciers and mass loss from Greenland/Antarctica"
    ],
    diagnosis:
        "My patient is running a persistent fever. The rising global temperature is like a body that cannot cool itself, with heat trapped under a heavy blanket. The causes are clear: excess greenhouse gases acting as insulation, loss of the planet’s natural cooling (forests, ice, reflective surfaces), and urban build-up that stores and re-radiates heat. Just as a fever warns of underlying infection, this warming signals stress on Earth’s vital systems.",
    prescriptions: [
    {
        label: "Cut Greenhouse Gas Emissions",
        detail:
        "Rapidly reduce reliance on fossil fuels by transitioning to renewable energy sources such as solar, wind, and hydro. Strengthen efficiency standards for buildings, vehicles, and industry."
    },
    {
        label: "Protect and Restore Forests",
        detail:
        "Preserve existing forests as vital carbon sinks and reforest degraded land. Prioritize tropical and boreal regions where carbon storage potential is highest."
    },
    {
        label: "Decarbonize Transportation",
        detail:
        "Electrify cars, buses, and freight systems, expand public transit, and encourage active transport (walking, biking) to curb one of the largest sources of emissions."
    },
    {
        label: "Adapt Agriculture and Land Use",
        detail:
        "Adopt climate-smart farming—reduced tillage, cover crops, methane management, and regenerative practices—to lower emissions while securing food systems."
    }
    ],
    expectedOutcomes: [
        "Stabilization of global temperature rise within 1.5–2 °C above pre-industrial levels",
        "Reduced frequency and severity of extreme heat waves, droughts, and floods",
        "Improved public health outcomes from cleaner air and lower heat stress",
        "Sustainable economic growth driven by clean energy and resilient systems"
    ],

    charts: [
      // replace the chart with id: "uhi-lst-trend" with these two:
      {
        id: "loti-lowess",
        title: "Global Land–Ocean Temperature Index (1880–2024)",
        type: "line",
        unit: "°C",
        note: "LOWESS(5) smoothing of global Land–Ocean Temperature Index.",
        data: [
            { name: "1880", value: -0.10 }, { name: "1881", value: -0.13 },
            { name: "1882", value: -0.17 }, { name: "1883", value: -0.20 },
            { name: "1884", value: -0.24 }, { name: "1885", value: -0.26 },
            { name: "1886", value: -0.27 }, { name: "1887", value: -0.27 },
            { name: "1888", value: -0.27 }, { name: "1889", value: -0.26 },
            { name: "1890", value: -0.25 }, { name: "1891", value: -0.26 },
            { name: "1892", value: -0.27 }, { name: "1893", value: -0.26 },
            { name: "1894", value: -0.24 }, { name: "1895", value: -0.23 },
            { name: "1896", value: -0.21 }, { name: "1897", value: -0.19 },
            { name: "1898", value: -0.17 }, { name: "1899", value: -0.18 },
            { name: "1900", value: -0.21 }, { name: "1901", value: -0.24 },
            { name: "1902", value: -0.27 }, { name: "1903", value: -0.29 },
            { name: "1904", value: -0.32 }, { name: "1905", value: -0.35 },
            { name: "1906", value: -0.37 }, { name: "1907", value: -0.38 },
            { name: "1908", value: -0.40 }, { name: "1909", value: -0.42 },
            { name: "1910", value: -0.42 }, { name: "1911", value: -0.40 },
            { name: "1912", value: -0.36 }, { name: "1913", value: -0.34 },
            { name: "1914", value: -0.32 }, { name: "1915", value: -0.32 },
            { name: "1916", value: -0.31 }, { name: "1917", value: -0.31 },
            { name: "1918", value: -0.31 }, { name: "1919", value: -0.30 },
            { name: "1920", value: -0.29 }, { name: "1921", value: -0.27 },
            { name: "1922", value: -0.26 }, { name: "1923", value: -0.25 },
            { name: "1924", value: -0.24 }, { name: "1925", value: -0.23 },
            { name: "1926", value: -0.22 }, { name: "1927", value: -0.22 },
            { name: "1928", value: -0.20 }, { name: "1929", value: -0.20 },
            { name: "1930", value: -0.20 }, { name: "1931", value: -0.19 },
            { name: "1932", value: -0.18 }, { name: "1933", value: -0.17 },
            { name: "1934", value: -0.16 }, { name: "1935", value: -0.14 },
            { name: "1936", value: -0.11 }, { name: "1937", value: -0.07 },
            { name: "1938", value: -0.02 }, { name: "1939", value:  0.03 },
            { name: "1940", value:  0.06 }, { name: "1941", value:  0.08 },
            { name: "1942", value:  0.10 }, { name: "1943", value:  0.09 },
            { name: "1944", value:  0.07 }, { name: "1945", value:  0.04 },
            { name: "1946", value:  0.00 }, { name: "1947", value: -0.04 },
            { name: "1948", value: -0.07 }, { name: "1949", value: -0.08 },
            { name: "1950", value: -0.08 }, { name: "1951", value: -0.07 },
            { name: "1952", value: -0.07 }, { name: "1953", value: -0.07 },
            { name: "1954", value: -0.07 }, { name: "1955", value: -0.06 },
            { name: "1956", value: -0.05 }, { name: "1957", value: -0.04 },
            { name: "1958", value: -0.01 }, { name: "1959", value:  0.01 },
            { name: "1960", value:  0.03 }, { name: "1961", value:  0.01 },
            { name: "1962", value: -0.01 }, { name: "1963", value: -0.03 },
            { name: "1964", value: -0.04 }, { name: "1965", value: -0.05 },
            { name: "1966", value: -0.06 }, { name: "1967", value: -0.05 },
            { name: "1968", value: -0.03 }, { name: "1969", value: -0.02 },
            { name: "1970", value: -0.00 }, { name: "1971", value:  0.00 },
            { name: "1972", value:  0.00 }, { name: "1973", value: -0.00 },
            { name: "1974", value:  0.01 }, { name: "1975", value:  0.02 },
            { name: "1976", value:  0.04 }, { name: "1977", value:  0.07 },
            { name: "1978", value:  0.12 }, { name: "1979", value:  0.16 },
            { name: "1980", value:  0.20 }, { name: "1981", value:  0.21 },
            { name: "1982", value:  0.22 }, { name: "1983", value:  0.21 },
            { name: "1984", value:  0.21 }, { name: "1985", value:  0.22 },
            { name: "1986", value:  0.24 }, { name: "1987", value:  0.27 },
            { name: "1988", value:  0.31 }, { name: "1989", value:  0.33 },
            { name: "1990", value:  0.33 }, { name: "1991", value:  0.33 },
            { name: "1992", value:  0.33 }, { name: "1993", value:  0.33 },
            { name: "1994", value:  0.34 }, { name: "1995", value:  0.36 },
            { name: "1996", value:  0.40 }, { name: "1997", value:  0.42 },
            { name: "1998", value:  0.44 }, { name: "1999", value:  0.47 },
            { name: "2000", value:  0.50 }, { name: "2001", value:  0.52 },
            { name: "2002", value:  0.54 }, { name: "2003", value:  0.58 },
            { name: "2004", value:  0.61 }, { name: "2005", value:  0.62 },
            { name: "2006", value:  0.62 }, { name: "2007", value:  0.63 },
            { name: "2008", value:  0.64 }, { name: "2009", value:  0.64 },
            { name: "2010", value:  0.64 }, { name: "2011", value:  0.66 },
            { name: "2012", value:  0.70 }, { name: "2013", value:  0.74 },
            { name: "2014", value:  0.79 }, { name: "2015", value:  0.83 },
            { name: "2016", value:  0.87 }, { name: "2017", value:  0.91 },
            { name: "2018", value:  0.93 }, { name: "2019", value:  0.94 },
            { name: "2020", value:  0.97 }, { name: "2021", value:  1.02 },
            { name: "2022", value:  1.08 }, { name: "2023", value:  1.13 },
            { name: "2024", value:  1.19 }
        ],
        series: {
          annual: [
            { name: "1880", value: -0.17 }, { name: "1881", value: -0.09 },
            { name: "1882", value: -0.11 }, { name: "1883", value: -0.17 },
            { name: "1884", value: -0.28 }, { name: "1885", value: -0.33 },
            { name: "1886", value: -0.31 }, { name: "1887", value: -0.36 },
            { name: "1888", value: -0.18 }, { name: "1889", value: -0.11 },
            { name: "1890", value: -0.35 }, { name: "1891", value: -0.22 },
            { name: "1892", value: -0.27 }, { name: "1893", value: -0.31 },
            { name: "1894", value: -0.31 }, { name: "1895", value: -0.23 },
            { name: "1896", value: -0.12 }, { name: "1897", value: -0.11 },
            { name: "1898", value: -0.28 }, { name: "1899", value: -0.18 },
            { name: "1900", value: -0.09 }, { name: "1901", value: -0.16 },
            { name: "1902", value: -0.29 }, { name: "1903", value: -0.38 },
            { name: "1904", value: -0.48 }, { name: "1905", value: -0.27 },
            { name: "1906", value: -0.23 }, { name: "1907", value: -0.40 },
            { name: "1908", value: -0.44 }, { name: "1909", value: -0.49 },
            { name: "1910", value: -0.44 }, { name: "1911", value: -0.45 },
            { name: "1912", value: -0.38 }, { name: "1913", value: -0.36 },
            { name: "1914", value: -0.16 }, { name: "1915", value: -0.15 },
            { name: "1916", value: -0.37 }, { name: "1917", value: -0.47 },
            { name: "1918", value: -0.31 }, { name: "1919", value: -0.29 },
            { name: "1920", value: -0.28 }, { name: "1921", value: -0.20 },
            { name: "1922", value: -0.29 }, { name: "1923", value: -0.27 },
            { name: "1924", value: -0.28 }, { name: "1925", value: -0.23 },
            { name: "1926", value: -0.11 }, { name: "1927", value: -0.22 },
            { name: "1928", value: -0.21 }, { name: "1929", value: -0.37 },
            { name: "1930", value: -0.16 }, { name: "1931", value: -0.10 },
            { name: "1932", value: -0.16 }, { name: "1933", value: -0.29 },
            { name: "1934", value: -0.13 }, { name: "1935", value: -0.20 },
            { name: "1936", value: -0.15 }, { name: "1937", value: -0.03 },
            { name: "1938", value: -0.01 }, { name: "1939", value: -0.02 },
            { name: "1940", value:  0.12 }, { name: "1941", value:  0.18 },
            { name: "1942", value:  0.06 }, { name: "1943", value:  0.08 },
            { name: "1944", value:  0.20 }, { name: "1945", value:  0.09 },
            { name: "1946", value: -0.08 }, { name: "1947", value: -0.03 },
            { name: "1948", value: -0.11 }, { name: "1949", value: -0.11 },
            { name: "1950", value: -0.18 }, { name: "1951", value: -0.07 },
            { name: "1952", value:  0.01 }, { name: "1953", value:  0.08 },
            { name: "1954", value: -0.13 }, { name: "1955", value: -0.14 },
            { name: "1956", value: -0.19 }, { name: "1957", value:  0.05 },
            { name: "1958", value:  0.06 }, { name: "1959", value:  0.03 },
            { name: "1960", value: -0.03 }, { name: "1961", value:  0.06 },
            { name: "1962", value:  0.03 }, { name: "1963", value:  0.05 },
            { name: "1964", value: -0.20 }, { name: "1965", value: -0.11 },
            { name: "1966", value: -0.06 }, { name: "1967", value: -0.02 },
            { name: "1968", value: -0.08 }, { name: "1969", value:  0.05 },
            { name: "1970", value:  0.03 }, { name: "1971", value: -0.08 },
            { name: "1972", value:  0.01 }, { name: "1973", value:  0.16 },
            { name: "1974", value: -0.07 }, { name: "1975", value: -0.01 },
            { name: "1976", value: -0.10 }, { name: "1977", value:  0.18 },
            { name: "1978", value:  0.07 }, { name: "1979", value:  0.16 },
            { name: "1980", value:  0.26 }, { name: "1981", value:  0.32 },
            { name: "1982", value:  0.14 }, { name: "1983", value:  0.31 },
            { name: "1984", value:  0.16 }, { name: "1985", value:  0.12 },
            { name: "1986", value:  0.18 }, { name: "1987", value:  0.32 },
            { name: "1988", value:  0.39 }, { name: "1989", value:  0.27 },
            { name: "1990", value:  0.45 }, { name: "1991", value:  0.41 },
            { name: "1992", value:  0.22 }, { name: "1993", value:  0.23 },
            { name: "1994", value:  0.31 }, { name: "1995", value:  0.44 },
            { name: "1996", value:  0.33 }, { name: "1997", value:  0.46 },
            { name: "1998", value:  0.61 }, { name: "1999", value:  0.38 },
            { name: "2000", value:  0.39 }, { name: "2001", value:  0.53 },
            { name: "2002", value:  0.63 }, { name: "2003", value:  0.61 },
            { name: "2004", value:  0.53 }, { name: "2005", value:  0.68 },
            { name: "2006", value:  0.64 }, { name: "2007", value:  0.66 },
            { name: "2008", value:  0.54 }, { name: "2009", value:  0.65 },
            { name: "2010", value:  0.72 }, { name: "2011", value:  0.61 },
            { name: "2012", value:  0.64 }, { name: "2013", value:  0.68 },
            { name: "2014", value:  0.75 }, { name: "2015", value:  0.90 },
            { name: "2016", value:  1.01 }, { name: "2017", value:  0.92 },
            { name: "2018", value:  0.85 }, { name: "2019", value:  0.98 },
            { name: "2020", value:  1.01 }, { name: "2021", value:  0.85 },
            { name: "2022", value:  0.89 }, { name: "2023", value:  1.17 },
            { name: "2024", value:  1.28 }
          ]
        }
      },
      {
        id: "canopy-change",
        title: "Earth's Global Temperature (1881 - 2024)",
        type: "bar",
        unit: "%",
        data: [
          { name: "Core", value: -8.5 },
          { name: "Inner Ring", value: -6.1 },
          { name: "Suburbs", value: -3.2 }
        ]
      }
    ],
    gallery: [
      { src: "/heatmapusa", caption: "Heatmap of USA" },
      { src: "/coolmapusa", caption: "Cooler temp map of USA" }
    ],
    datasets: [
      {
        name: "Global Temperature - Earth Indicator",
        description:
          "Observation of Earth's global temperature change from 1880 to present based on land surface air temperature and sea surface temperature measurements.",
        link: "https://science.nasa.gov/earth/explore/earth-indicators/global-temperature/",
        caveats: "Earth's average surface temperature in 2024 was the warmest on record since 1880."
      },
      {
        name: "Global_Mean_Estimates_based_on_Land_and_Ocean_Data",
        description:
          "Impervious fraction and canopy cover for diagnosing heat storage and evapotranspiration.",
        link: "https://data.giss.nasa.gov/gistemp/graphs/graph_data/Global_Mean_Estimates_based_on_Land_and_Ocean_Data/graph.txt"
      }
    ],
    references: [
      { label: "EPA Heat Island Effect Overview", link: "https://www.epa.gov/heatislands" },
      { label: "MODIS LST Product Docs" }
    ]
  },
  {
    id: "co",
    slug: "carbon-monoxide-hotspots",
    title: "Carbon Monoxide Hotspots",
    category: "Air",
    heroImage: "/co_hero",
    summary:
        "Carbon monoxide plumes trace combustion—from fossil fuel use to biomass burning—altering atmospheric chemistry and linking to air quality stress.",
    doctorsNote:
        "I'm detecting recurring CO spikes downwind of dense traffic corridors and seasonal fires. The patient's airways are irritated; we must cut combustion and ventilate.",
    keyStat: "13–25% seasonal CO increase in plume-affected regions",
    vitals: [
        { label: "1980s–1990s baseline", value: "≈0.20–0.25 ppm" },  // higher than today’s ~0.12–0.18 ppm
        { label: "Fire-season spikes", value: "up to 0.40–0.50 ppm" }, // biomass burning events
        { label: "Urban traffic share", value: "≈40% of CO in cities" } // transport attribution
    ],

    symptoms: [
      "Elevated CO during morning/evening rush and fire seasons",
      "Coincident drops in ozone titration zones and co-elevated NOx",
      "Downwind exposure corridors affecting vulnerable groups"
    ],
    diagnosis:
      "CO is a primary pollutant from incomplete combustion (traffic, industry, biomass burning). Terra-era records show persistent urban baselines with acute wildfire-driven episodes. Recurrent exposure exacerbates cardiovascular and neurological risks.",
    prescriptions: [
      {
        label: "Electrify Transport",
        detail:
          "Accelerate fleet electrification and bus depot transitions; prioritize charging in exposure corridors."
      },
      {
        label: "Combustion Controls",
        detail:
          "Tighten inspection/maintenance, retrofit industrial burners, and enforce anti-idling zones near schools/hospitals."
      },
      {
        label: "Fire Season Alerts",
        detail:
          "Deploy low-cost sensors and issue exposure-time advisories; distribute HEPA filtration to at-risk households."
      }
    ],
    expectedOutcomes: [
      "20–35% reduction in urban CO baselines over 5–8 years",
      "Fewer high-exposure hours during fire seasons",
      "Co-benefits: lower NOx/PM and improved cardiopulmonary outcomes"
    ],
    charts: [
      {
        id: "co-seasons",
        title: "Carbon Monoxide (March 2000 - October 2024)",
        type: "area",
      }
    ],
    gallery: [
      { src: "/cochart", caption: "CO plume advection over region" },
      { src: "/comopitt", caption: "Portable HEPA filtration in homes and clinics" }
    ],
    datasets: [
      {
        name: "Carbon Monoxide (1 month - Terra/MOPITT)",
        description: "Thermal images of Carbon Monoxide (CO) over the years.",
        link: "https://neo.gsfc.nasa.gov/view.php?datasetId=MOP_CO_Mt",
        caveats: "Vertical sensitivity and cloud screening introduce uncertainty."
      },
    ],
    references: [
      { label: "Carbon Monoxide", link: "https://earthobservatory.nasa.gov/global-maps/MOP_CO_M" },
      { label: "Fourteen Years of Carbon Monoxide from MOPITT", link: "https://earthobservatory.nasa.gov/images/85967/fourteen-years-of-carbon-monoxide-from-mopitt" },
      { label: "MOPITT", link: "https://terra.nasa.gov/about/terra-instruments/mopitt"}
    ]
  },
  {
    id: "scars",
    slug: "earth-scars-wildfire-burn-marks-and-flood-lines",
    title: "Earth Scars (Wildfire Burn Marks & Flood Lines)",
    category: "Land",
    heroImage: "/scars_hero",
    summary:
      "Terra's record reveals expanding burn perimeters and flood footprints—lasting scars on ecosystems and communities.",
    doctorsNote:
      "I see new lesions across forests and fresh flood hematomas along rivers. The patient is healing, but recurrent injury is leaving scar tissue. We must prevent, buffer, and restore.",
    keyStat: "From 2015 to 2021, extreme wet or dry events occurred ~4 times per year—up from ~3 per year previously.",
    vitals: [
        { label: "Forest fire escalation", value: "2× tree cover loss vs. 2001" },  
        { label: "US wildfire size", value: "+223% since 1984" },                   
        { label: "Global burned area", value: "−24% (1998–2015)" }                  
    ],
    symptoms: [
      "Expanding burn perimeters with high-severity cores",
      "Repeated over-bank flooding and channel migration",
      "Post-event erosion and water quality degradation"
    ],
    diagnosis:
        "My patient bears deep scars from repeated wildfires and floods. High fever from rising temperatures, chronic dryness, and heavy fuel buildup make fires burn hotter and longer, while unchecked development in floodplains worsens every surge of water. These wounds heal slowly, leaving lasting damage to forests, rivers, and communities.",
    prescriptions: [
      {
        label: "Fuel & Forest Management",
        detail:
          "Prescribed burns, mechanical thinning, and defensible space near communities; protect old-growth refugia."
      },
      {
        label: "Floodplain Reconnection",
        detail:
          "Restore wetlands and setback levees to spread peak flows; adopt nature-based solutions in urban catchments."
      },
      {
        label: "Post-Event Restoration",
        detail:
          "Rapid reseeding, erosion control, and riparian plantings; monitor recovery with seasonal imagery."
      }
    ],
    expectedOutcomes: [
      "Lower high-severity fire fraction and reduced home loss",
      "Reduced peak discharge and sediment loads during storms",
      "Faster vegetative recovery and biodiversity protection"
    ],
    charts: [
      {
        id: "burned-area",
        title: "Fires / Hotspots on 10/4/2025",
        type: "line",
      },
      {
        id: "flood-events",
        title: "Global View of Flood Events",
        type: "bar",
      }
    ],
    gallery: [
      { src: "/fires_live", caption: "Top view of a live wildfire and ground scarring" },
      { src: "/floods_live", caption: "Before & after a flood event" }
    ],
    datasets: [
      {
        name: "NASA Fire Information for Resource Management System (FIRMS)",
        link: "https://firms.modaps.eosdis.nasa.gov/map/#d:24hrs;@0.0,0.0,3.0z",
        description: "Global view of fire and hotpots."
      },
      {
        name: "NASA Worldview Flood (3-Day Window)",
        link: "https://worldview.earthdata.nasa.gov/?v=-361.5587065076821,-178.4903663821837,260.63318370302585,148.8255782043516&l=Reference_Labels_15m(hidden),Reference_Features_15m(hidden),Coastlines_15m,MODIS_Combined_Flood_3-Day(disabled=3),MODIS_Combined_Flood_2-Day(hidden,disabled=3),VIIRS_NOAA20_CorrectedReflectance_TrueColor(hidden),VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor&lg=true&t=2022-01-17-T18%3A32%3A29Z",
        description: "Global outline of flood events over a 3-day window.",
      }
    ],
    references: [
      { label: "USFS Fire Ecology Resources" },
      { label: "Nature-based Flood Mitigation Strategies" }
    ]
  }
];
