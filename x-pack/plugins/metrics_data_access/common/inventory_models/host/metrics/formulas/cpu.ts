/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { i18n } from '@kbn/i18n';
import type { LensBaseLayer } from '@kbn/lens-embeddable-utils/config_builder';

export const cpuUsageIowait: LensBaseLayer = {
  label: i18n.translate('xpack.metricsData.assetDetails.formulas.cpuUsage.iowaitLabel', {
    defaultMessage: 'iowait',
  }),
  value: 'average(system.cpu.iowait.pct) / max(system.cpu.cores)',
  format: 'percent',
  decimals: 1,
};

export const cpuUsageIrq: LensBaseLayer = {
  label: i18n.translate('xpack.metricsData.assetDetails.formulas.cpuUsage.irqLabel', {
    defaultMessage: 'irq',
  }),
  value: 'average(system.cpu.irq.pct) / max(system.cpu.cores)',
  format: 'percent',
  decimals: 1,
};

export const cpuUsageNice: LensBaseLayer = {
  label: i18n.translate('xpack.metricsData.assetDetails.formulas.cpuUsage.niceLabel', {
    defaultMessage: 'nice',
  }),
  value: 'average(system.cpu.nice.norm.pct) / max(system.cpu.cores)',
  format: 'percent',
  decimals: 1,
};

export const cpuUsageSoftirq: LensBaseLayer = {
  label: i18n.translate('xpack.metricsData.assetDetails.formulas.cpuUsage.softirqLabel', {
    defaultMessage: 'softirq',
  }),
  value: 'average(system.cpu.softirq.pct) / max(system.cpu.cores)',
  format: 'percent',
  decimals: 1,
};

export const cpuUsageSteal: LensBaseLayer = {
  label: i18n.translate('xpack.metricsData.assetDetails.formulas.cpuUsage.stealLabel', {
    defaultMessage: 'steal',
  }),
  value: 'average(system.cpu.steal.pct) / max(system.cpu.cores)',
  format: 'percent',
  decimals: 1,
};

export const cpuUsageSystem: LensBaseLayer = {
  label: i18n.translate('xpack.metricsData.assetDetails.formulas.cpuUsage.systemLabel', {
    defaultMessage: 'system',
  }),
  value: 'average(system.cpu.system.pct) / max(system.cpu.cores)',
  format: 'percent',
  decimals: 1,
};

export const cpuUsageUser: LensBaseLayer = {
  label: i18n.translate('xpack.metricsData.assetDetails.formulas.cpuUsage.userLabel', {
    defaultMessage: 'user',
  }),
  value: 'average(system.cpu.user.pct) / max(system.cpu.cores)',
  format: 'percent',
  decimals: 1,
};

export const cpuUsage: LensBaseLayer = {
  label: i18n.translate('xpack.metricsData.assetDetails.formulas.cpuUsage', {
    defaultMessage: 'CPU Usage',
  }),
  value: '(average(system.cpu.user.pct) + average(system.cpu.system.pct)) / max(system.cpu.cores)',
  format: 'percent',
  decimals: 0,
};
