﻿// ==========================================================================
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex UG (haftungsbeschraenkt)
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

using Squidex.Domain.Apps.Core.Rules;
using Squidex.Infrastructure;

namespace Squidex.Domain.Apps.Entities.Rules.Indexes;

public interface IRulesIndex
{
    Task<List<Rule>> GetRulesAsync(DomainId appId,
        CancellationToken ct = default);
}
